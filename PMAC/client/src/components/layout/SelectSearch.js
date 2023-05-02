import React, { useState, useEffect } from 'react';
import { getAllProfile, getSearchProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import s from '../../styles/StudentProfile.module.css';

const SelectSearch = ({
  profile: {profiles, loading},
  getAllProfile,
  getSearchProfile
}

) =>{
const [contacts, setContacts] = useState([]);
const [searchFname, setSearchFname] = useState('');
const [searchLname, setSearchLname] = useState('');
const [searchCWID, setSearchCWID] = useState('');

useEffect(() => {
  getAllProfile();
}, []);

return (
  <div>
    
      <h1 className='text-center mt-4'></h1>
      <form >
        

          {/* onChange for search */}
          <input type="text"
            onChange={(e) => setSearchFname(e.target.value)}
            placeholder='Filter by Firstname'
          />
        
        

          {/* onChange for search */}
          <input type="text"
            onChange={(e) => setSearchLname(e.target.value)}
            placeholder='Filter by Lastname'
          />
        
      </form>
      <table className='table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>CWID</th>
          </tr>
        </thead>
        <tbody>
          {profiles
            .filter((item) => {
              return searchFname.toLowerCase() === '' && searchLname.toLowerCase() === ''
                ? item
                : item.fname && item.fname.toLowerCase().includes(searchFname.toLowerCase()) && item.lname.toLowerCase().includes(searchLname.toLowerCase());
            })
            .map((item, index) => (
              
              <tr key={item}>
                <td className={s.nameUnderline}><a href={`/CandidateEvaluations/${item._id}`}>{item.fname}</a></td>
                <td><a href={`/CandidateEvaluations/${item._id}`}>{item.lname}</a></td>
                <td><a href={`/CandidateEvaluations/${item._id}`}>{item.ulm_email}</a></td>
                <td><a href={`/CandidateEvaluations/${item._id}`}>{item.cwid}</a></td>
              </tr>
            ))}
            
        </tbody>
      </table>
    
  </div>
);
}


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