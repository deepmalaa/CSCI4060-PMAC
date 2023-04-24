import React, { useState, useEffect } from 'react';

import { getAllProfile, getSearchProfile } from '../../actions/profile';
import css from '../../styles/SearchApplication.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StudentProfile from './StudentProfile';
import Sidebar from './Sidebar';


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
    <>
      <Sidebar role="admin" />
    <div className={css.container}>
      
        <h1 className={css.subTitle}>Search for a Student's Completed Application</h1>
        <div className={css.entire}>
          <form>
            

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
          <form className={css.form}>
            {profiles
              .filter((item) => {
                return (!searchFname || searchFname.toLowerCase() === '') && (!searchLname || searchLname.toLowerCase() === '')
                  ? item
                  : (item.fname && item.fname.toLowerCase().includes(searchFname.toLowerCase())) && (item.lname && item.lname.toLowerCase().includes(searchLname.toLowerCase()));
              })
              .map((item, index) => (
                <div key={index}>
                  <br></br>
                  <div className={css.left}> 
                    <label className={css.textLabels} htmlFor={`fname${index}`}>First Name:</label>
                    <input id={`fname${index}`} type="text" value={item.fname} />
                  </div> 

                  <div className={css.left}> 
                    <label className={css.textLabels} htmlFor={`mname${index}`}>Middle Name:</label>
                    <input id={`mname${index}`} type="text" value={item.mname} />
                  </div> 

                  <div className={css.left}>
                    <label className={css.textLabels} htmlFor={`lname${index}`}>Last Name:</label>
                    <input id={`lname${index}`} type="text" value={item.lname} />
                  </div>

                  <div className={css.left3}>
                    <label className={css.textLabels} htmlFor={`cwid${index}`}>CWID:</label>
                    <input id={`cwid${index}`} type="text" value={item.cwid} />
                  </div>

                  <div className={css.left2}>
                    <label className={css.textLabels} htmlFor={`address${index}`}>Address:</label>
                    <input id={`address${index}`} type="text" value={item.address} />
                  </div>

                  <div className={css.clear}> </div>

                  <br></br>
                  <br></br>

                  <div className={css.left}>
                    <label className={css.textLabels} htmlFor={`cell${index}`}>Cell #:</label>
                    <input id={`cell${index}`} type="text" value={item.cell} />
                  </div>

                  <div className={css.left}>
                    <label className={css.textLabels} htmlFor={`ulm_email${index}`}>ULM Email: </label>
                    <input id={`ulm_email${index}`} type="text" value={item.ulm_email} />
                  </div>
                  
                  <div className={css.left}>
                    <label className={css.textLabels} htmlFor={`alt_email${index}`}>Alt Email:</label>
                    <input id={`alt_email${index}`} type="text" value={item.alt_email} />
                  </div>
                  
                  <div className={css.clear}> </div>
                  
                  <div className={css.left}>
                    <label className={css.textLabels} htmlFor={`major${index}`}>Major:</label>
                    <input id={`major${index}`} type="text" value={item.major} />
                  </div>

                  <div className={css.left}>
                    <label className={css.textLabels} htmlFor={`minor${index}`}>Minor:</label>
                    <input id={`minor${index}`} type="text" value={item.minor} />
                  </div>

                  <div className={css.left}>
                    <label className={css.textLabels} htmlFor={`gpa${index}`}>GPA:</label>
                    <input id={`gpa${index}`} type="text" value={item.gpa} />
                  </div>

                  <div className={css.clear}> </div>

                  <br></br>
                  <br></br>

                  <div className={css.grad}>
                    <label className={css.textLabels} htmlFor={`grad_date${index}`}>Graduation Date:</label>
                    <input id={`grad_date${index}`} type="text" value={item.grad_date} />
                  </div>

                  <div className={css.profGrad}>
                    <label className={css.textLabels} htmlFor={`entrance_date${index}`}>Entrance Date:</label>
                    <input id={`entrance_date${index}`} type="text" value={item.entrance_date} />
                  </div>

                  <br></br>

                  <div className={css.left1}>
                    <label className={css.textLabels} htmlFor={`mcat${index}`}>MCAT:</label>
                    <input id={`mcat${index}`} type="text" value={item.mcat} />
                  </div>  

                  <div className={css.left1}>
                    <label className={css.textLabels} htmlFor={`dat${index}`}>DAT:</label>
                    <input id={`dat${index}`} type="text" value={item.dat} />
                  </div>

                  <div className={css.left1}>
                    <label className={css.textLabels} htmlFor={`oat${index}`}>OAT:</label>
                    <input id={`oat${index}`} type="text" value={item.oat} />
                  </div>

                  <div className={css.left1}>
                    <label className={css.textLabels} htmlFor={`gre${index}`}>GRE:</label>
                    <input id={`gre${index}`} type="text" value={item.gre} />
                  </div>

                  <div className={css.scores}>
                    <label className={css.textLabels} htmlFor={`scoreBreakdown${index}`}>Score Breakdown:</label>
                    <input id={`scoreBreakdown${index}`} type="text" value={item.scoreBreakdown} />
                  </div>

                  <br></br>

                  <div className={css.examTaken}>
                    <label className={css.textLabels} htmlFor={`exam_date${index}`}>Exam Date:</label>
                    <input id={`exam_date${index}`} type="text" value={item.exam_date} />
                  </div>

                  <div className={css.examTaken}>
                    <label className={css.textLabels} htmlFor={`schoolType${index}`}>School Type:</label>
                    <input id={`schoolType${index}`} type="text" value={item.schoolType} />
                  </div>
                  
                  <div className={css.left}>
                    <label className={css.textLabels} htmlFor={`amcas_id${index}`}>AMCAS ID:</label>
                    <input id={`amcas_id${index}`} type="text" value={item.amcas_id} />
                  </div>

                  <div className={css.left}>
                    <label className={css.textLabels} htmlFor={`aacomas_id${index}`}>AACOMAS ID:</label>
                    <input id={`aacomas_id${index}`} type="text" value={item.aacomas_id} />
                  </div>

                  <div className={css.left}> 
                    <label className={css.textLabels} htmlFor={`aadsas_id${index}`}>AADSAS ID:</label>
                    <input id={`aadsas_id${index}`} type="text" value={item.aadsas_id} />
                  </div>

                  <div className={css.left}>
                    <label className={css.textLabels} htmlFor={`aamc_id${index}`}>AAMC ID:</label>
                    <input id={`aamc_id${index}`} type="text" value={item.aamc_id} />
                  </div>

                  <div className={css.left}>
                    <label className={css.textLabels} htmlFor={`caspa_id${index}`}>CASPA ID:</label>
                    <input id={`caspa_id${index}`} type="text" value={item.caspa_id} />
                  </div>

                  <br></br>

                  <div className={css.examTaken}> 
                    <label className={css.textLabels} htmlFor={`FacultyEval${index}`}>Faculty Evaluation:</label>
                    <input id={`FacultyEval${index}`} type="text" value={item.FacultyEval} />
                  </div>

                  <br></br>


                  <div className={css.redLine}></div>

                  {/* add other rows here */}
                </div>
              ))}
          </form>
        </div>
       
    </div>
    </>
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

