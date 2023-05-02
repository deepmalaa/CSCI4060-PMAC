import React, { useState, useEffect } from 'react';
import { getAllProfile, getSearchProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import css from '../../styles/SearchApplication.module.css';

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
  }, [getAllProfile]);

  const handleMouseOver = (event, index) => {
    // Set the selected contact index to the current row index
    setSelectedContactIndex(index);
  };

  const handleClick = (event, index) => {
    // Handle click event on the contact name cell
    console.log('Selected contact:', profiles[index]);
  };

  return (
    
    <div className={css.container}>
      <h1 className='text-center mt-4'></h1>
        
        <h1 className={css.subTitle} style={{width:'45%', height:'25%'}}>
          Search for a Student's Completed Application
          <br></br>
          <br />
          <p style={{fontSize:'15pt'}}>To go to a Student's Application, click on their First Name</p>
        </h1>
        
        
        <div className={css.entire}>  

        <form>
          {/* onChange for search */}
          <input
            type='text'
            onChange={(e) => setSearchFname(e.target.value)}
            placeholder='Filter by Firstname' />

          {/* onChange for search */}
          <input
            type='text'
            onChange={(e) => setSearchLname(e.target.value)}
            placeholder='Filter by Lastname' />        
        </form>
    <segment>

        <table className='table'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>CWID</th>
              <th>Email</th>
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
                  : item.fname &&
                  item.fname
                    .toLowerCase()
                    .includes(searchFname.toLowerCase()) &&
                  item.lname.toLowerCase().includes(searchLname.toLowerCase());
              })
              .map((item, index) => (
                <tr 
                  key={item._id}
                  onMouseOver={(event) => handleMouseOver(event, index)}
                  className={index === selectedContactIndex ? 'selected-row' : ''}>
                  <td onClick={(event) => handleClick(event, index)}>
                  <a href={`/CandidateEvaluations/${item._id}`}>{item.fname}</a>
                  </td>
                  <td> <a href={`/CandidateEvaluations/${item._id}`}>{item.lname}</a></td>
                  <td> <a href={`/CandidateEvaluations/${item._id}`}>{item.cwid}</a></td>
                  <td> <a href={`/CandidateEvaluations/${item._id}`}>{item.alt_email}</a></td>
                  
                </tr>
              ))}
          </tbody>
        </table>
      </segment>
      </div>
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