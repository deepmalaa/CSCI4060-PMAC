  import React, { useState } from 'react';
  import ApplicationSelector from './ApplicationSelector';
  import '../styles/StatusPage.css';
  import allopathicIcon from '../img/StatusPageIcons/twosnakes.png';
  import osteopathicIcon from '../img/StatusPageIcons/onesnake.png';
  import physicianAssistantIcon from '../img/StatusPageIcons/physician.png';
  import dentalIcon from '../img/StatusPageIcons/tooth.png';
  import otherIcon from '../img/StatusPageIcons/other.png';
  import Calendar from './Calendar';
  import Details from './StatusPageDetails';
  import s from '../styles/HomePage.module.css';




  function StatusPage() {
    const [selectedApplication, setSelectedApplication] = useState('');
    const [status, setStatus] = useState('');
    const [showApplicationSelector, setShowApplicationSelector] = useState(true); // new state variable
  
    const submittedApplications = {
      application1: {
        verified: true,
        title: 'Allopathic Medical Application',
        status: 'Pending',
        icon: allopathicIcon,
        interviewStatus: false,
        submissionDate: 'month/day/year',
      },
      application2: {
        verified: true,
        title: 'Osteopathic Medical Application',
        status: 'Accepted',
        icon: osteopathicIcon,
        interviewStatus: false,
        submissionDate: 'month/day/year',
      },
      application3: {
        verified: true,
        title: 'Physician Assistant Application',
        status: 'Denied',
        icon: physicianAssistantIcon,
        interviewStatus: false,
        submissionDate: 'month/day/year',
      },
      application4: {
        verified: true,
        title: 'Dental Application',
        status: 'Incomplete',
        icon: dentalIcon,
        interviewStatus: false,
        submissionDate: 'month/day/year',
      },
      application5: {
        verified: true,
        title: 'Other(ex: Podiatry) Application',
        status: 'Complete',
        icon: otherIcon,
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
  
    // Used to create checkbox placement buttons. Allows for checkbox selection identification
    const days = ['Monday', 'Wednesday', 'Thursday', 'Friday'];
    
    return (
      <body>
          <div style={{fontSize:'16pt'}}> Application Status </div>
          <div className={s.goldBars}></div>
          
          
        <div className="background">
          {selectedApplication ? (
            <>
              <applicationStatus title={title} status={applicationStatus} interviewStatus={interviewStatus} submissionDate={submissionDate} onClose={() => setSelectedApplication('')} />
              {applicationStatus === 'Accepted' && interviewStatus === false && <Calendar days={days}/>}
              {applicationStatus !== 'Accepted' && <Details application={submittedApplications[selectedApplication]} />}
              {applicationStatus === 'Accepted' && interviewStatus === true &&<Details application={submittedApplications[selectedApplication]} />}
            </>
          ) : (
            <ApplicationSelector onChange={handleSelect} applications={submittedApplications} />
          )}
          
          {selectedApplication && interviewStatus && (
            <div>
              <button style={{width:'100px', borderRadius:'45px'}} onClick={() => setSelectedApplication('')}>Done</button>
            </div>
          )}
          {selectedApplication && !interviewStatus && (
            <div>
              <button onClick={() => setSelectedApplication('')}>Done</button>
            </div>
          )}
        </div>
        <div className={s.goldBars}></div>
      </body>
    );
  }

  export default StatusPage;

