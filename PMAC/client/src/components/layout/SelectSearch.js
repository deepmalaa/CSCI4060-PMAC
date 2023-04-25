import React, { useState, useEffect } from 'react';
import { getAllProfile, getSearchProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SelectSearch = ({
  profile: { profiles, loading },
  getAllProfile,
  getSearchProfile
}) => {
  const [contacts, setContacts] = useState([]);
  const [searchFname, setSearchFname] = useState('');
  const [searchLname, setSearchLname] = useState('');
  const [searchCWID, setSearchCWID] = useState('');
  const [selectedContactIndex, setSelectedContactIndex] = useState(-1);

  useEffect(() => {
    getAllProfile();
  }, [profiles, getAllProfile]);

  const handleMouseOver = (event, index) => {
    // Set the selected contact index to the current row index
    setSelectedContactIndex(index);
  };

  const handleClick = (event, index) => {
    // Handle click event on the contact name cell
    console.log('Selected contact:', profiles[index]);
  };

  return (
    <div className='table-container' style={{ height: '400px', overflow: 'scroll' }}>
      <h1 className='text-center mt-4'></h1>
      <form>
        {/* onChange for search */}
        <input
          type='text'
          onChange={(e) => setSearchFname(e.target.value)}
          placeholder='Filter by Firstname'
        />

        {/* onChange for search */}
        <input
          type='text'
          onChange={(e) => setSearchLname(e.target.value)}
          placeholder='Filter by Lastname'
        />
      </form>
      <table className='table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>CWID</th>

            <th></th> {/* Add a new column with a blank header */}
          </tr>
        </thead>
        <tbody>
        {profiles
          .filter((item) => {
            return (
              searchFname.toLowerCase() === '' &&
              searchLname.toLowerCase() === ''
            )
              ? item
              : item.fname
                  .toLowerCase()
                  .includes(searchFname.toLowerCase()) &&
                item.lname.toLowerCase().includes(searchLname.toLowerCase());
          })
          .map((item, index) => (
            <tr
              key={item._id}
              onMouseOver={(event) => handleMouseOver(event, index)}
              className={
              index === selectedContactIndex ? 'selected-row' : ''}>
              <td onClick={(event) => handleClick(event, index)}>
                {item.fname}
              </td>
              <td>{item.lname}</td>
              <td>{item.cwid}</td>
              <td>
                
                {/* Add the button that will redirect to the user's personal statement page */}
                <button onClick={() => {window.location.href = `/InterviewEvaluation/${item._id}`;}}>
                  Evaluate
                </button>
              </td>
            </tr>
          ))}
    </tbody>
  </table>
</div>
);};

SelectSearch.propTypes = {
profile: PropTypes.object.isRequired,
getAllProfile: PropTypes.func.isRequired,
getSearchProfile: PropTypes.func.isRequired,
};
    
const mapStateToProps = (state) => ({
profile: state.profile,
});
    
export default connect(mapStateToProps, { getAllProfile, getSearchProfile })(
SelectSearch
);