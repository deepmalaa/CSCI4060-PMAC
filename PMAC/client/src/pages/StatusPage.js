
import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {Link, Navigate} from 'react-router-dom';
import ApplicationSelector from './ApplicationSelector';
import user1 from './ApplicantInformation';
import '../styles/StatusPage.css';
import Details from './StatusPageDetails';
import s from '../styles/HomePage.module.css';
import topBanner from '../img/StatusPage.jpg';
import { getCurrentProfile } from '../actions/profile';
import { applicantRelease } from '../actions/applicantRelease';
import { ApplicantInfo } from '../actions/applicantInformation';
import PropTypes from 'prop-types';
import Sidebar from '../components/layout/Sidebar';



const StatusPage =({getCurrentProfile, applicantRelease, auth: { user }, profile: { profile }}) =>{
  useEffect(() => {getCurrentProfile();}, [getCurrentProfile]);
  
  const [selectedApplication, setSelectedApplication] = useState('');
  const [status, setStatus] = useState('');
  const [showApplicationSelector, setShowApplicationSelector] = useState(true); // new state variable

  // Users full name
  const Fullname = profile.fname + " " + profile.mname + " " + profile.lname;
  
  // Default verified false
  let Verified1 = false;
  let Verified2 = false;
  let Verified3 = false;
  let Verified4 = false;
  let Verified5 = false;
 
  // Checks to see what user is applying for
  if(profile.amcas_id !== '' && profile.amcas_id !== '') {
    Verified1 = true;  
  }
  if(profile.aacomas_id !== null && profile.aacomas_id !== '') {
    Verified2 = true;  
  }
  if(profile.aadsas_id !== null && profile.aadsas_id !== '') {
    Verified3 = true;  
  }
  if(profile.aamc_id_id != null && profile.aamc_id !== '') {
    Verified4 = true;  
  }
  if(profile.caspa_id != null && profile.caspa_id !== '') {
    Verified5 = true;  
  }


    const submittedApplications = {
      application1: {
        name: Fullname,
        verified: Verified1,
        title: "Medical Application",
        status: 'Pending',
        interviewStatus: false,
        submissionDate: 'month/day/year',
      },

      application2: {
        name: Fullname,
        verified: Verified2,
        title: 'Osteopathic Medical Application',
        status: 'Accepted',
        interviewStatus: false,
        submissionDate: 'month/day/year',
      },
      application3: {
        name: Fullname,
        verified: Verified3,
        title: 'Physician Assistant Application',
        status: 'Denied',
        interviewStatus: false,
        submissionDate: 'month/day/year',
      },
      application4: {
        name: Fullname,
        verified: Verified4,
        title: 'Dental Application',
        status: 'Interview',
        interviewStatus: false,
        submissionDate: 'month/day/year',
      },
      application5: {
        name: Fullname,
        verified: Verified5,
        title: 'Other(ex: Podiatry) Application',
        status: 'Complete',
        interviewStatus: false,
        submissionDate: 'month/day/year',
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
  
    const title = submittedApplications[selectedApplication]?.title;
    const applicationStatus = submittedApplications[selectedApplication]?.status;
    const interviewStatus = submittedApplications[selectedApplication]?.interviewStatus;
    const submissionDate = submittedApplications[selectedApplication]?.submissionDate;
    const name = submittedApplications[selectedApplication]?.name;
  
    
    return (
      <>
      <div>

        <div className={s.container}>
        <Sidebar role="student" />    
        </div> 

        <div>
            <div className={s.whiteBar} style={{marginTop:'-6px'}}>
            <div className={s.goldBars}> </div>
                <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#account">Account</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#Help">Help</a></li>
                </ul>
            </div>
            <div className={s.goldBars}> </div>
          </div>

        <div className={s.topBanner}>
          <div className={s.img}>
            <img src={topBanner} alt="Backdrop of ULM Campus"/>  
          </div>
          <div className={s.bottomTitle} style={{fontSize:'40pt'}}>
            Application Status    
          </div>
          <div className={s.goldBars}></div>        
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
            <div style={{marginTop:'10px'}}>
              <button onClick={() => setSelectedApplication('')}>Done</button>
            </div>
          )}
          </>
        </div> 

      <div>
        <div className={s.goldBars}></div>
        <div className='redBar'></div>
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