
import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {Link, Navigate} from 'react-router-dom';
import ApplicationSelector from './ApplicationSelector';
import user1 from './ApplicantInformation';
import '../styles/StatusPage.css';
import Details from './StatusPageDetails';
import s from '../styles/ApplicantInformation.module.css';
import topBanner from '../img/StatusPage.jpg';
import { getCurrentProfile } from '../actions/profile';
import { applicantRelease } from '../actions/applicantRelease';
import { ApplicantInfo } from '../actions/applicantInformation';
import PropTypes from 'prop-types';
import Sidebar from '../components/layout/Sidebar';
import { getWaiver } from '../actions/applicantRelease';


// Pulling User profile information
const StatusPage =({getCurrentProfile, applicantRelease, auth: { user }, profile: { profile }}) =>{
  useEffect(() => {getCurrentProfile();}, [getCurrentProfile]);

  const [waivers, setWaivers] = useState([]);
  const [facultyForms, setFacultyForms] = useState([]);

  useEffect(() => {
    const fetchWaivers = async () => {
      //Waivers

      //FacultyForms
      //const data1 = await getFacultyForms();
      //setFacultyForms(data1);
    };
    fetchWaivers();
    getCurrentProfile();
  });

  
  const [selectedApplication, setSelectedApplication] = useState('');
  const [status, setStatus] = useState('');
  const [showApplicationSelector, setShowApplicationSelector] = useState(true); // new state variable

  // Users full name
  let Fullname = user && user.name;
  // If name is not null displays name
  if (profile.fname !== null && profile.mname !== null && profile.lname !== null) {
    Fullname = profile.fname + " " + profile.mname + " " + profile.lname;
  }
  
  
  const DateOfSubmission = new Date(profile.date).toLocaleString();

  // Default verified false
  let Verified1 = false;
  let Verified2 = false;
  let Verified3 = false;
  let Verified4 = false;
  let Verified5 = false;

  // Default status
  let status1 = 'Pending';
  let status2 = 'Pending';
  let status3 = 'Pending';
  let status4 = 'Pending';
  let status5 = 'Pending';

  // Default release
  let releaseForm = false;
  // Default message
  let message = 'No release signature';
 
  // Ensures release form is submitted
  //if(waivers != null && waivers.authorize) {
    // Allows release of status
    releaseForm = true;
    // Allows next default message
    message = 'No applications found';
    // Checks to see what user is applying for
    if(profile.medicalField1 == true) {
      Verified1 = true;  
    }
    if(profile.medicalField2 == true) {
      Verified2 = true;  
    }
    if(profile.medicalField3 == true) {
      Verified3 = true;  
    }
    if(profile.medicalField4 == true) {
      Verified4 = true;  
    }
    if(profile.medicalField5 == true) {
      Verified5 = true;  
    }
  //}

    // Medical Application info
    const submittedApplications = {
      application1: {
        name: Fullname,
        verified: Verified1, // if verified = true means candidate applied
        title: "Medical Application",
        status: status1,
        interviewStatus: false,
        submissionDate: DateOfSubmission,
        //release: releaseForm,
        //Statusmessage: message,
      },
      
      // Osteopathic Medical Application info
      application2: {
        name: Fullname,
        verified: Verified2, // if verified = true means candidate applied
        title: 'Osteopathic Medical Application', 
        status: status2,
        interviewStatus: false,
        submissionDate: DateOfSubmission,
        //release: releaseForm,
        //Statusmessage: message,
      },
      // Physician Assistant Application info
      application3: {
        name: Fullname,
        verified: Verified3, // if verified = true means candidate applied
        title: 'Physician Assistant Application',
        status: status3,
        interviewStatus: false,
        submissionDate: DateOfSubmission,
        //release: releaseForm,
        //Statusmessage: message,
      },
      
      //Dental Application info
      application4: {
        name: Fullname,
        verified: Verified4, // if verified = true means candidate applied
        title: 'Dental Application',
        status: status4,
        interviewStatus: false,
        submissionDate: DateOfSubmission,
        //release: releaseForm,
        //Statusmessage: message,
      },

      // Other(ex: Podiatry) Application info
      application5: {
        name: Fullname,
        verified: Verified5, // if verified = true means candidate applied
        title: 'Other(ex: Podiatry) Application',
        status: status5,
        interviewStatus: false,
        submissionDate: DateOfSubmission,
        //release: releaseForm,
        //Statusmessage: message,
      },
    };
  
    function handleSelect(application) {
      setSelectedApplication(application);
      setStatus('');
      setShowApplicationSelector(false); // hide ApplicationSelector component
    }
  
    function handleReset() {
      setSelectedApplication('');
      setStatus('');
      setShowApplicationSelector(true); // show ApplicationSelector component
    }
  
    // Used to pull application info for StatusPageDetails and ApplicationSelector
    const title = submittedApplications[selectedApplication]?.title;
    const applicationStatus = submittedApplications[selectedApplication]?.status;
    const interviewStatus = submittedApplications[selectedApplication]?.interviewStatus;
    const submissionDate = submittedApplications[selectedApplication]?.submissionDate;
    const name = submittedApplications[selectedApplication]?.name;
    //const release = submittedApplications[selectedApplication]?.releaseForm;
    //const Statusmessage = submittedApplications[selectedApplication]?.Statusmessage;
  
    
    return (
      <>
      <div>
        <div className={s.container}> <Sidebar role="student" /> </div> 
        
        <div className={s.body}>
          <div className={s.top}>
              <div className={s.goldBars}> </div>
              <div className={s.whiteBar}>
                <ul>
                  <li><a href="/dashboardStudent">Home</a></li>
                </ul>
              </div>
              <div className={s.goldBars}> </div>
            </div>
          

          <div className='header'>
            Application Status    
          </div>      
        </div>
      </div>

        <div className="background">
          {selectedApplication ? (
            <>
              <applicationStatus title={title} status={applicationStatus} interviewStatus={interviewStatus} submissionDate={submissionDate} onClose={() => setSelectedApplication('')} />
              {applicationStatus === 'Accepted' && (!interviewStatus || selectedApplication) && <Details application={submittedApplications[selectedApplication]} />}
              {applicationStatus !== 'Accepted' && <Details application={submittedApplications[selectedApplication]} />}
            </>
          ) : (
            <ApplicationSelector onChange={handleSelect} applications={submittedApplications} />
          )}
          
          <>
          {selectedApplication && (
            <div style={{marginTop:'50px'}}>
              <button className="btn btn-primary" onClick={() => setSelectedApplication('')}>Done</button>
            </div>
          )}
          </>
        </div> 

      </> 
    );
  }

  StatusPage.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  };
  const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
  });

  export default connect(mapStateToProps, { getCurrentProfile })(
    StatusPage
  );


  //<div className={s.img}>
  //<img src={topBanner} alt="Backdrop of ULM Campus"/>  
  //</div>