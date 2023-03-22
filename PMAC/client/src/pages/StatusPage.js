  import React, { useState } from 'react';
  import ApplicationSelector from './ApplicationSelector';
  import '../styles/StatusPage.css';
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
        interviewStatus: false,
        submissionDate: 'month/day/year',
      },
      application2: {
        verified: true,
        title: 'Osteopathic Medical Application',
        status: 'Accepted',
        interviewStatus: false,
        submissionDate: 'month/day/year',
      },
      application3: {
        verified: true,
        title: 'Physician Assistant Application',
        status: 'Denied',
        interviewStatus: false,
        submissionDate: 'month/day/year',
      },
      application4: {
        verified: true,
        title: 'Dental Application',
        status: 'Interview',
        interviewStatus: false,
        submissionDate: 'month/day/year',
      },
      application5: {
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
  
    
    return (
      <body>

        <div style={{fontSize:'16pt', fontFamily:'Arial'}}> Application Status </div>
        <div className={s.goldBars}></div>
          
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
          
          {selectedApplication && (
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

//<Calendar days={days}/>