import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import Sidebar from '../components/layout/Sidebar';
import SelectSearch from '../components/layout/SelectSearch';
import css from '../styles/SearchApplication.module.css';
import s from '../styles/StudentProfile.module.css';

const InterviewEvaluation = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile }
}) => {
  
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  const [isShown, setIsShown] = useState(false);
  const [applicants, setApplicants] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [releaseStatementPath, setReleaseStatementPath] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/applicants'); // replace with actual API endpoint
      const data = await response.json();
      setApplicants(data.filter(applicant => applicant.evaluationStatus === 'passed'));
    }
    fetchData();
  }, []);
  

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleSelectApplicant = (applicant) => {
    setSelectedApplicant(applicant);
    setReleaseStatementPath(`${applicant.fname}_${applicant.lname}_release.pdf`);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <>
      <Sidebar role={user && user.type} />
                     
      <div className={s.subTitle1}>Search For a Student's Completed Application <div className={s.subTitle2}>To go to a Student's Application, click on their First Name</div></div>
      <button
            className={s.buttonCust1}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
          </button>
          {isShown && (
            <div className={s.hoverContent1}>
              <div className={s.hoverHead}> 
                Help
              </div>
              <div className={s.hoverText}>
                - To go to a Student's Application, click on their First Name. Underlined in blue.
              </div>

              <div className={s.hoverText}>
                - If two students have the same name, you can identify them by their email or CWID.
              </div>

            </div>
          )}

        <div onSubmit={handleFormSubmit}>
          <SelectSearch/>
          
        </div>        
      
    </>
  );
};

InterviewEvaluation.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(
  InterviewEvaluation
);


//<div>
  //  <label htmlFor="releaseStatementPath">Release Statement:</label>
    //<input type="text" id="releaseStatementPath" value={releaseStatementPath} readOnly />
//</div>
//<button type="submit">Submit</button>