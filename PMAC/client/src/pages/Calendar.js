import React, { useState } from 'react';
import '../styles/StatusPage.css';

//Calendar function for Accepted application
function Calendar(props) {
  const { days } = props;
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timeSlots = [    
    "8:00am - 9:30am",    
    "9:30am - 10:30am",    
    "10:30am - 11:30am",    
    "11:30am - 12:30pm",    
    "12:30pm - 1:30pm",    
    "1:30pm - 2:30pm",    
    "2:30pm - 3:30pm",    
    "3:30pm - 4:30pm",  
  ];

  //2D array to hold the state of each checkbox
  const [checkboxState, setCheckboxState] = useState(
    Array(weekdays.length)
      .fill()
      .map(() => Array(timeSlots.length).fill(false))
  );

  //State variable to store the selected options
  const [selectedOptions, setSelectedOptions] = useState([]);

  //State variable to track if the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);

  //State of a checkbox when it is clicked
  const handleClick = (row, col) => {
    const newCheckboxState = [...checkboxState];
    newCheckboxState[row][col] = !checkboxState[row][col];
    setCheckboxState(newCheckboxState);

    //Update the selected options state variable
    const selectedOption = `${timeSlots[col]} on ${days[row].toLocaleDateString()}`;
    setSelectedOptions(prevOptions => {
      if (newCheckboxState[row][col]) {
        return [...prevOptions, selectedOption];
      } else {
        return prevOptions.filter(option => option !== selectedOption);
      }
    });
  };

  //Displays alert window when options are sumbitted
  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedDays = weekdays.filter((_, rowIndex) => {
      return checkboxState[rowIndex].some((isChecked) => isChecked);
    });
    const selectedTimes = timeSlots.filter((_, colIndex) => {
      return checkboxState.some((row) => row[colIndex]);
    });
    const selectedOptions = selectedDays.flatMap((day) => {
      return selectedTimes.map((time) => {
        return `${time} on ${day}`;
      });
    });
    alert(`Selected options: ${selectedOptions.join(", ")}`);
    setFormSubmitted(true);
  };

  //Resets Date Options
  const handleReset = () => {
    setSelectedOptions([]);
    setCheckboxState(Array(weekdays.length).fill().map(() => Array(timeSlots.length).fill(false)));
    setFormSubmitted(false);
  };
  //Keeps track of option button selection
  const rows = timeSlots.map((timeSlot, colIndex) => {
    const cells = weekdays.map((day, rowIndex) => {
      const date = days.find((date) => date && date.toLocaleString("en-us", { weekday: "long" }).toLowerCase() === day.toLowerCase());

          //CkeckBox button 
          return (
            <td style={{borderBottom:'1px solid'}} key={day}>
              <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <input
                  type="checkbox"
                  onClick={() => handleClick(rowIndex, colIndex)}
                  checked={checkboxState[rowIndex][colIndex]}
                  style={{ transform: 'scale(4)'}}
                />
              </label>
            </td>
          );
        });

        //Time slots for interview
        return (
          <tr key={timeSlot}>
            <td style={{height: '75px', display: 'flex', alignItems: 'center', justifyContent: 'center', color:'white', backgroundColor:'dimgrey'}}>
              {timeSlot}
            </td>
            {cells}
          </tr>
        );
      });

      //Displays calandar
      return (
        <div style={{display: 'flex', justifyContent: 'center', position:'relative', top:'-50px', right:'30%', textAlign: 'center'}}>
          {!formSubmitted && (
            <form onSubmit={handleSubmit}>
              <table style={{backgroundColor: 'grey'}}>
                <thead style={{border: '1px solid'}}>
                  <tr style={{backgroundColor:'grey', color:'white'}}>
                    <th></th>
                    {weekdays.map((day) => (
                      <th key={day} style={{backgroundColor:'dimgrey'}}>
                        <div style={{ height: '40px', width: '175px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft:'-10px'}}>
                          {day}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody style={{margin:'60px'}}>
                  {rows}
                </tbody>
              </table>
              <div style={{marginTop: '20px'}}>
                <button style={{ transform: 'scale(2)', backgroundColor: 'grey'}} type="submit">Submit</button>
              </div>
            </form>
          )}
          {formSubmitted && (
            <div style={{position:'relative', backgroundColor:'grey'}}>
              <p>Selected options: {selectedOptions.join(", ")}</p>
            </div>
          )}
        </div>
      );
    }

export default Calendar;

