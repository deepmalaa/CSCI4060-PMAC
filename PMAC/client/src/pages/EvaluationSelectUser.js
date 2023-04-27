import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import Sidebar from '../components/layout/Sidebar';
import SelectSearch from '../components/layout/SelectSearch';
import s from '../styles/ApplicantInformation.module.css';

const InterviewEvaluation = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile }
}) => {
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
      <Sidebar role="committe" />
      <div className={s.body}>
        <div className={s.top}>
            <div className={s.goldBars}> </div>
            <div className={s.whiteBar}>
                <ul>
                    <li><a href="/dashboardCommittee">Home</a></li>
                    <li><a href="/StudentContactPage">Contact</a></li>
                </ul>
            </div>
            <div className={s.goldBars}> </div>
        </div>
    </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10%' }}>
        <h1 style={{ color: 'maroon', fontSize: '36px', textAlign: 'center' }}>
          Search for a Student
        </h1>
        <form onSubmit={handleFormSubmit} className={s.form} style={{height: '700px'}}>
          <SelectSearch
            applicants={applicants
              .filter((item) => {
                return searchName.toLowerCase() === ''
                  ? item
                  : `${item.fname} ${item.lname}`.toLowerCase().includes(searchName.toLowerCase());
              })
              .filter((item) => {
                return item.faculty_evaluation;
              })}
            onSelect={handleSelectApplicant}
            onSearchChange={handleSearchNameChange}
          />
          
        </form>
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