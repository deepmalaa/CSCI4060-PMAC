import React, { useState} from 'react';
import ApplicationSelector from './ApplicationSelector';
import ApplicationStatus from './ApplicationStatus';
import hawk from './component/video/Hawk.mp4';
import './App.css';
import allopathicIcon from './component/video/twosnakes.png';
import osteopathicIcon from './component/video/onesnake.png';
import physicianAssistantIcon from './component/video/physician.png';
import dentalIcon from './component/video/tooth.png';
import otherIcon from './component/video/other.png';
import Calendar from './Calendar';

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

function StatusPage() {
  const [selectedApplication, setSelectedApplication] = useState('');
  const [status, setStatus] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const submittedApplications = {
    application1: { verified: true, title: 'Allopathic Medical Application', status: 'Pending', icon: allopathicIcon },
    application2: { verified: true, title: 'Osteopathic Medical Application', status: 'Accepted', icon: osteopathicIcon },
    application3: { verified: true, title: 'Physician Assistant Application', status: 'Denied', icon: physicianAssistantIcon },
    application4: { verified: false, title: 'Dental Application', status: 'Pending', icon: dentalIcon },
    application5: { verified: false, title: 'Other(ex: Podiatry) Application', status: 'Denied', icon: otherIcon },
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

  function prevMonth() {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  }

  function nextMonth() {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  }

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const firstDayOfWeekIndex = DAYS_OF_WEEK.indexOf(firstDayOfMonth.toLocaleString('en-us', { weekday: 'short' }));

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
    const dayOfWeek = date.toLocaleString('en-us', { weekday: 'short' });
    days.push(dayOfWeek);
  }


  return (
    <body className = 'App-background' style={{backgroundColor: 'grey'}}>
      <div>
        <video className='video-player' autoPlay loop muted>
          <source src={hawk} type="video/mp4"/>
        </video>
        <div className='App-header'>
          Application Status
        </div>
      </div>
      <div className='down'>
        <ApplicationSelector onChange={handleSelect} applications={submittedApplications} />
        {selectedApplication && (<ApplicationStatus title={title} status={applicationStatus} onClose={() => setSelectedApplication('')}/>)}
        {selectedApplication && applicationStatus === 'Accepted' && <Calendar days={days}/>}
      </div>
    </body>
  );
}

export default StatusPage;
//application-sign release-review-recomendation-interview-package
