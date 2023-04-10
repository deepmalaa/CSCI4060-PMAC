
import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {Link, Navigate} from 'react-router-dom';
import ApplicationSelector from './ApplicationSelector';
import '../styles/StatusPage.css';
import Details from './StatusPageDetails';
import s from '../styles/HomePage.module.css';
import topBanner from '../img/StatusPage.jpg';
import { getCurrentProfile } from '../actions/profile';
import { applicantRelease } from '../actions/applicantRelease';
import PropTypes from 'prop-types';
import Sidebar from '../components/layout/Sidebar';


const StatusPage =({getCurrentProfile, applicantRelease, auth: { user }, profile: { profile }}) =>{
  useEffect(() => {getCurrentProfile();}, [getCurrentProfile]);

  const [selectedApplication, setSelectedApplication] = useState('');
  const [status, setStatus] = useState('');
  const [showApplicationSelector, setShowApplicationSelector] = useState(true); // new state variable
  
  const UserName = user != null ? user.name : "";

    const submittedApplications = {
      application1: {
        name: UserName,
        verified: true,
        title: "Medical Application",
        status: 'Pending',
        interviewStatus: false,
        submissionDate: 'month/day/year',
      },

      application2: {
        name: UserName,
        verified: true,
        title: 'Osteopathic Medical Application',
        status: 'Accepted',
        interviewStatus: false,
        submissionDate: 'month/day/year',
      },
      application3: {
        name: UserName,
        verified: true,
        title: 'Physician Assistant Application',
        status: 'Denied',
        interviewStatus: false,
        submissionDate: 'month/day/year',
      },
      application4: {
        name: UserName,
        verified: true,
        title: 'Dental Application',
        status: 'Interview',
        interviewStatus: false,
        submissionDate: 'month/day/year',
      },
      application5: {
        name: UserName,
        verified: true,
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
            <div className={s.whiteBar}>
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