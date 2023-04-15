import React, { useState, useEffect } from 'react';

import { getAllProfile, getSearchProfile } from '../../actions/profile';
import css from '../../styles/SearchApplication.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StudentProfile from './StudentProfile';


const SearchApplication = ({
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

    
  }, [profiles, getAllProfile]);
  

  // const sortName = () => {
  //   setContacts(
  //     data.sort((a, b) => {
  //       return a.first_name.toLowerCase() < a.first_name.toLowerCase()
  //         ? -1
  //         : a.first_name.toLowerCase() > a.first_name.toLowerCase()
  //         ? 1
  //         : 0;
  //     })
  //   );
  // };

  return (
    <div className={css.container}>
      
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
        <table className={css.table}>
          <thead className={css.thead}>
            <tr>
              <th className={css.th}>First Name</th>
              <th className={css.th}>Last Name</th>
              <th className={css.th}>Email</th>
              <th className={css.th}>2nd Email</th>
              <th className={css.th}>CWID</th>
              <th className={css.th}>Address</th>
              <th className={css.th}>Cell #</th>
              <th className={css.th}>DOB</th>
              <th className={css.th}>Major</th>
              <th className={css.th}>Minor</th>
              <th className={css.th}>Grad Date</th>
              <th className={css.th}>GPA</th>
              <th className={css.th}>Entrance Date</th>
              <th className={css.th}>MCAT</th>
              <th className={css.th}>DAT</th>
              <th className={css.th}>OAT</th>
              <th className={css.th}>GRE</th>
              <th className={css.th}>Score Breakdown</th>
              <th className={css.th}>School Type</th>
              <th className={css.th}>Exam Date</th>
              <th className={css.th}>AMCAS id</th>
              <th className={css.th}>AACOMAS id</th>
              <th className={css.th}>AADSAS id</th>
              <th className={css.th}>AAMC id</th>
              <th className={css.th}>CASPA id</th>
              <th className={css.th}>Faculty Evaluation</th>
            </tr>
          </thead>
          <tbody>
            {profiles
              .filter((item) => {
                return searchFname.toLowerCase() === '' && searchLname.toLowerCase() === ''
                  ? item
                  : item.fname.toLowerCase().includes(searchFname.toLowerCase()) && item.lname.toLowerCase().includes(searchLname.toLowerCase());
              })
              .map((item, index) => (
                <tr key={index}>
                  <td className={css.td}>{item.fname}</td>
                  <td className={css.td}>{item.lname}</td>
                  <td className={css.td}>{item.ulm_email}</td>
                  <td className={css.td}>{item.alt_email}</td>
                  <td className={css.td}>{item.cwid}</td>
                  <td className={css.td}>{item.address}</td>
                  <td className={css.td}>{item.cell}</td>
                  <td className={css.td}>{item.bdate}</td>
                  <td className={css.td}>{item.major}</td>
                  <td className={css.td}>{item.minor}</td>
                  <td className={css.td}>{item.grad_date}</td>
                  <td className={css.td}>{item.gpa}</td>
                  <td className={css.td}>{item.entrance_date}</td>
                  <td className={css.td}>{item.mcat}</td>
                  <td className={css.td}>{item.dat}</td>
                  <td className={css.td}>{item.oat}</td>
                  <td className={css.td}>{item.gre}</td>
                  <td className={css.td}>{item.scoreBreakdown}</td>
                  <td className={css.td}>{item.schoolType}</td>
                  <td className={css.td}>{item.exam_date}</td>
                  <td className={css.td}>{item.amcas_id}</td>
                  <td className={css.td}>{item.aacomas_id}</td>
                  <td className={css.td}>{item.aadsas_id}</td>
                  <td className={css.td}>{item.aamc_id}</td>
                  <td className={css.td}>{item.caspa_id}</td>
                  <td className={css.td}>{item.facultyEval}</td>
                </tr>
              ))}
              
          </tbody>
        </table>
       
    </div>
  );
}

SearchApplication.propTypes = {
    profile: PropTypes.object.isRequired,
    getAllProfile: PropTypes.func.isRequired,
    getSearchProfile: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    profile: state.profile
  });
  
  export default connect(mapStateToProps, { getAllProfile, getSearchProfile })(
    SearchApplication
  );

