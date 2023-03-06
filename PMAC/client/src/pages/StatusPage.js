  import React, { useState } from 'react';
  import ApplicationSelector from './ApplicationSelector';
  import hawk from '../img/Hawk.mp4';
  import '../styles/StatusPage.css';
  import allopathicIcon from '../img/StatusPageIcons/twosnakes.png';
  import osteopathicIcon from '../img/StatusPageIcons/onesnake.png';
  import physicianAssistantIcon from '../img/StatusPageIcons/physician.png';
  import dentalIcon from '../img/StatusPageIcons/tooth.png';
  import otherIcon from '../img/StatusPageIcons/other.png';
  import Calendar from './Calendar';
  import Details from './StatusPageDetails';

  //Days of the week
  const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  function StatusPage() {
    const [selectedApplication, setSelectedApplication] = useState('');
    const [status, setStatus] = useState('');
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const submittedApplications = {
      application1: { verified: true, title: 'Allopathic Medical Application', status: 'Pending', icon: allopathicIcon, interviewStatus: false, submissionDate:'month/day/year'},
      application2: { verified: true, title: 'Osteopathic Medical Application', status: 'Accepted', icon: osteopathicIcon, interviewStatus: false, submissionDate:'month/day/year' },
      application3: { verified: true, title: 'Physician Assistant Application', status: 'Denied', icon: physicianAssistantIcon, interviewStatus: false, submissionDate:'month/day/year' },
      application4: { verified: true, title: 'Dental Application', status: 'Incomplete', icon: dentalIcon, interviewStatus: false, submissionDate:'month/day/year' },
      application5: { verified: true, title: 'Other(ex: Podiatry) Application', status: 'Complete', icon: otherIcon, interviewStatus: false, submissionDate:'month/day/year' },
    };

    function handleSelect(application) {
      setSelectedApplication(application);
      setStatus('');
    }
    
    function handleReset() {
      setSelectedApplication('');
      setStatus('');
    }

    const title = submittedApplications[selectedApplication]?.title;
    const applicationStatus = submittedApplications[selectedApplication]?.status;
    const interviewStatus = submittedApplications[selectedApplication]?.interviewStatus;
    const submissionDate = submittedApplications[selectedApplication]?.submissionDate;

    function prevMonth() {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    }

    function nextMonth() {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    }

    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const firstDayOfWeekIndex = DAYS_OF_WEEK.indexOf(firstDayOfMonth.toLocaleString('en-us', { weekday: 'short' }));

    //Used to create checkbox placement buttons. Allows for checkbox selction identification
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      const dayOfWeek = date.toLocaleString('en-us', { weekday: 'short' });
      days.push(dayOfWeek);
    }
    
    return (
      <body className='App-background' style={{ backgroundColor: 'grey' }}>
        <div>
          <video className='video-player' autoPlay loop muted>
            <source src={hawk} type="video/mp4" />
          </video>
          <div className='App-header'>
            Application Status
          </div>
        </div>
        <div className='down'>
          {selectedApplication ? (
            <>
              <applicationStatus title={title} status={applicationStatus} interviewStatus={interviewStatus} submissionDate={submissionDate} onClose={() => setSelectedApplication('')} />
              {applicationStatus === 'Accepted' && interviewStatus === false && <Calendar days={days}/>}
              {applicationStatus !== 'Accepted' && <Details application={submittedApplications[selectedApplication]} />}
            </>
          ) : (
            <ApplicationSelector onChange={handleSelect} applications={submittedApplications} />
          )}
        </div>
      </body>
    );
  }

  export default StatusPage;
  //application-sign release-review-recomendation-interview-package

