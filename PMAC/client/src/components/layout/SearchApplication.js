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
      
        <h1 className={css.subTitle}></h1>
        <div className={css.entire}>
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
          <form>
            {profiles
              .filter((item) => {
                return searchFname.toLowerCase() === '' && searchLname.toLowerCase() === ''
                  ? item
                  : item.fname.toLowerCase().includes(searchFname.toLowerCase()) && item.lname.toLowerCase().includes(searchLname.toLowerCase());
              })
              .map((item, index) => (
                <div className={css.form} key={index}>

                  <label htmlFor={`fname${index}`}>First Name:</label>
                  <input id={`fname${index}`} type="text" value={item.fname} />
                  
                  <label htmlFor={`lname${index}`}>Last Name:</label>
                  <input id={`lname${index}`} type="text" value={item.lname} />

                  <label htmlFor={`ulm_email${index}`}>ULM Email: </label>
                  <input id={`ulm_email${index}`} type="text" value={item.ulm_email} />
                  
                  <label htmlFor={`alt_email${index}`}>Alt Email:</label>
                  <input id={`alt_email${index}`} type="text" value={item.alt_email} />

                  <label htmlFor={`cwid${index}`}>CWID:</label>
                  <input id={`cwid${index}`} type="text" value={item.cwid} />

                  <label htmlFor={`address${index}`}>Address:</label>
                  <input id={`address${index}`} type="text" value={item.address} />

                  <label htmlFor={`cell${index}`}>Cell #:</label>
                  <input id={`cell${index}`} type="text" value={item.cell} />

                  <label htmlFor={`bdate${index}`}>DOB:</label>
                  <input id={`bdate${index}`} type="text" value={item.bdate} />

                  <label htmlFor={`major${index}`}>Major:</label>
                  <input id={`major${index}`} type="text" value={item.major} />

                  <label htmlFor={`minore${index}`}>Minor:</label>
                  <input id={`minore${index}`} type="text" value={item.minore} />

                  <label htmlFor={`grad_date${index}`}>Graduation Date:</label>
                  <input id={`grad_date${index}`} type="text" value={item.grad_date} />

                  <label htmlFor={`gpa${index}`}>GPA:</label>
                  <input id={`gpa${index}`} type="text" value={item.gpa} />

                  <label htmlFor={`entrance_date${index}`}>Entrance Date:</label>
                  <input id={`entrance_date${index}`} type="text" value={item.entrance_date} />

                  <label htmlFor={`mcat${index}`}>MCAT:</label>
                  <input id={`mcat${index}`} type="text" value={item.mcat} />

                  <label htmlFor={`dat${index}`}>DAT:</label>
                  <input id={`dat${index}`} type="text" value={item.dat} />

                  <label htmlFor={`oat${index}`}>OAT:</label>
                  <input id={`oat${index}`} type="text" value={item.oat} />

                  <label htmlFor={`gre${index}`}>GRE:</label>
                  <input id={`gre${index}`} type="text" value={item.gre} />

                  <label htmlFor={`scoreBreakdown${index}`}>Score Breakdown:</label>
                  <input id={`scoreBreakdown${index}`} type="text" value={item.scoreBreakdown} />

                  <label htmlFor={`schoolType${index}`}>School Type:</label>
                  <input id={`schoolType${index}`} type="text" value={item.schoolType} />

                  <label htmlFor={`exam_date${index}`}>Exam Date:</label>
                  <input id={`exam_date${index}`} type="text" value={item.exam_date} />

                  <label htmlFor={`amcas_id${index}`}>AMCAS ID:</label>
                  <input id={`amcas_id${index}`} type="text" value={item.amcas_id} />

                  <label htmlFor={`aacomas_id${index}`}>AACOMAS ID:</label>
                  <input id={`aacomas_id${index}`} type="text" value={item.aacomas_id} />

                  <label htmlFor={`aadsas_id${index}`}>AADSAS ID:</label>
                  <input id={`aadsas_id${index}`} type="text" value={item.aadsas_id} />

                  <label htmlFor={`aamc_id${index}`}>AAMC ID:</label>
                  <input id={`aamc_id${index}`} type="text" value={item.aamc_id} />

                  <label htmlFor={`caspa_id${index}`}>CASPA ID:</label>
                  <input id={`caspa_id${index}`} type="text" value={item.caspa_id} />

                  <label htmlFor={`FacultyEval${index}`}>Faculty Evaluation:</label>
                  <input id={`FacultyEval${index}`} type="text" value={item.FacultyEval} />

                  {/* add other rows here */}
                </div>
              ))}
          </form>
        </div>
       
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

