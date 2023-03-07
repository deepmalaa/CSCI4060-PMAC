import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../../styles/CheckList.css'

function CheckList() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);
    const [isClicked4, setIsClicked4] = useState(false);
    const [isClicked5, setIsClicked5] = useState(false);
    const [isClicked6, setIsClicked6] = useState(false);
    const [isClicked7, setIsClicked7] = useState(false);
    const [isClicked8, setIsClicked8] = useState(false);
    let [clickedCount, setCount] = useState(0); // Add new state variable

    const [style, setStyle] = useState("cont");
    //let clickedCount;
  
    // Function to handle form submission
    function handleSubmit(event) {
      event.preventDefault();
      // Perform form submission logic here
      setIsSubmitted(true);
    }
  
    // Function to handle circle click
    function handleCircleClick(circleNumber){
      
      switch (circleNumber) {
        case 1:
          setIsClicked1(!isClicked1);
          setStyle("cont2");
          break;
        case 2:
          setIsClicked2(!isClicked2);
          setStyle("cont2");
          break;
        case 3:
          setIsClicked3(!isClicked3);
          setStyle("cont2");
          break;
        case 4:
          setIsClicked4(!isClicked4);
          setStyle("cont2");
          break;
        case 5:
          setIsClicked5(!isClicked5);
          setStyle("cont2");
          break;
        case 6:
          setIsClicked6(!isClicked6);
          setStyle("cont2");
          break;
        case 7:
          setIsClicked7(!isClicked7);
          setStyle("cont2");
          break;
        case 8:
          setIsClicked8(!isClicked8);
          setStyle("cont2");
          break;
        default:
          break;
      }
  
      // Update the count of clicked circles
      clickedCount = [isClicked1, isClicked2, isClicked3, isClicked4, isClicked5, isClicked6, isClicked7, isClicked8].filter(Boolean).length;
      
      setCount(clickedCount+1);
    }

  return (
    <div className="p1">
      <div className="p2">
        <h1 className="p3">Status</h1>
      </div>
      <div className="p4">
            <div className="p5">
                <div
                    className="p6"
                    onClick={() => handleCircleClick(1)}
                ></div>
                <h1 className="p14">Application Information Form</h1>
            </div>
            <div className="p5">
            <div
                className="p7"
                onClick={() => handleCircleClick(2)}
            ></div>
            <h1 className="p14">Application Release Form</h1>
            </div>
            <div className="p5">
            <div
                className="p8"
                onClick={() => handleCircleClick(3)}
            ></div>
            <h1 className="p14">Personal Statement</h1>
            </div>
            <div className="p5">
            <div
                className="p9"
                onClick={() => handleCircleClick(4)}
            ></div>
            <h1 className="p14">Unofficial Transcript</h1>
            </div>
            <div className="p5">
            <div
                className="p10"
                onClick={() => handleCircleClick(5)}
            ></div>
            <h1 className="p14">Schedule</h1>
            </div>
            <div className="p5">
            <div
                className="p11"
                onClick={() => handleCircleClick(6)}
            ></div>
            <h1 className="p14">Headshot</h1>
            </div>
            <div className="p5">
            <div
                className="p12"
                onClick={() => handleCircleClick(7)}
            ></div>
            <h1 className="p14">AMCAS form if aplicable</h1>
            </div>
            <div className="p5">
            <div
                className="p13"
                onClick={() => handleCircleClick(8)}
            ></div>
            <h1 className="p14">Faculty Recommendations</h1>
            </div>
            
      </div>
      <p className='text1'>{`${clickedCount} of 8 completed`}</p>
      
      <div><ProgressBar striped variant="success" now = {clickedCount * 12.5} /></div>
    </div>
  );
}

export default CheckList;