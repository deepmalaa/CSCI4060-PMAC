import React, {Fragment, useEffect} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './pages/HomePage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import CreateProfile from './pages/CreateProfile';
import FacultyLanding from './pages/FacultyLanding';
import StudentLanding from './pages/StudentLanding';
import UploadPicture from './pages/Test';
import ApplicantInformationRelease from './pages/ApplicantInformationRelease';
import PrivateRoute from './components/auth/PrivateRoute';
import ApplicantInformation from './pages/ApplicantInformation';
import FacultyAdvisoryForm from './pages/FacultyAdvisoryForm';
import FacultyLetter from './pages/FacultyLetter';
import StatusPage from './pages/StatusPage';
import FacultyRecommendationForm from './pages/FacultyRecommendationForm';
import HomePage from './pages/HomePage';
import CommitteeMemberLanding from './pages/CommitteeMemberLanding';
import ChairLanding from './pages/ChairLanding';
import ManageUsers from './pages/ManageUsers';
import ManageApplications from './pages/ManageApplications';
import QuestionsPage from './pages/QuestionsPage';
import CreateAccount from './components/layout/CreateAccount';
import ContactPage from './pages/ContactPage';
import StudentContactPage from './pages/StudentContactPage';
import CommitteeContactPage from './pages/CommitteeContactPage';
import Calendar from './pages/Calendar';
import CommitteeCalendar from './pages/CommitteeCalendar';
import ReviewApplications from './pages/ReviewApplications';
import AdminCalendar from './pages/AdminCalendar';
import PersonalStatementPage from './pages/PersonalStatementPage';
import PersonalStatement from './pages/PersonalStatement';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './styles/App.css';
import ApplicationForm from './pages/ApplicationForm';

import ClubExperience from './pages/experiencePages/ClubExperience';
import AddClubExperience from './pages/experiencePages/AddClubExperience';

import FieldExperience from './pages/experiencePages/FieldExperience';
import AddFieldExperience from './pages/experiencePages/AddFieldExperience';

import HonorsExperience from './pages/experiencePages/Honors';
import AddHonorsExperience from './pages/experiencePages/AddHonors';

import LabExperience from './pages/experiencePages/LabExperience';
import AddLabExperience from './pages/experiencePages/AddLabExperience';

import VolunteerExperience from './pages/experiencePages/VolunteerExperience';
import AddVolunteerExperience from './pages/experiencePages/AddVolunteerExperience';

import WorkExperience from './pages/experiencePages/WorkExperience';
import AddWorkExperience from './pages/experiencePages/AddWorkExperience';
import Search from './components/layout/Search';
import SearchApplication from './components/layout/SearchApplication';
import Schedule from './components/layout/scheduleAlgorithm';
import Headshot from './pages/Headshot';

import StatusBar from './components/layout/StatusBar';
import Transcript from './pages/Transcript';
import StudentProfile from './pages/StudentProfile';


if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store = {store}>
    <BrowserRouter>
    <Fragment>
    
    <Navbar />

    <Routes>
        <Route path="/transcript" element={<Transcript/>} />
        <Route path="/" element={<Landing />} />
        <Route path="/createProfile" element={<CreateProfile/>} />
        <Route path="/dashboardFaculty" element={<PrivateRoute component ={FacultyLanding} />} />
        <Route path="/dashboardStudent" element={<PrivateRoute component ={StudentLanding} />} />
        <Route path="/applicantRelease" element={<ApplicantInformationRelease/>} />
        <Route path="/ApplicationForm" element={<ApplicationForm/>} />
        <Route path="/QuestionsPage" element={<QuestionsPage/>} />
        <Route path="/CreateAccount" element={<CreateAccount/>} />
        <Route path="/ContactPage" element={<ContactPage/>} />
        <Route path="/StudentContactPage" element={<StudentContactPage/>} />
        <Route path="/CommitteeContactPage" element={<CommitteeContactPage/>} />
        
        <Route path="/ApplicantInformation" element={<ApplicantInformation/>} /> 
        <Route path="/FacultyLetter" element={<FacultyLetter/>} />
        <Route path="/FacultyAdvisoryForm" element={<FacultyAdvisoryForm/>} />
        <Route path="/FacultyRecommendationForm" element={<FacultyRecommendationForm/>} />
        <Route path="/statusPage" element={<StatusPage/>} />
        <Route path="/PersonalStatementPage" element={<PersonalStatementPage/>} />
        <Route path="/PersonalStatement" element={<PersonalStatement/>} />

        <Route path="/dashboardCommittee" element={<PrivateRoute component ={CommitteeMemberLanding} />} />
        
        {/**
        <Route path="/dashboardChair" element={<ChairLanding/>} />
        <Route path="/manageUsers" element={<ManageUsers/>} />
        <Route path="/search" element={<Search/>} />
        */}

        <Route path="/dashboardChair" element={<PrivateRoute component ={ChairLanding} />} />
        <Route path="/manageUsers" element={<PrivateRoute component ={ManageUsers} />} />
        <Route path="/search" element={<PrivateRoute component ={Search} />} />
        <Route path= "/studentProfile/:userid" element ={<StudentProfile/>} />
        <Route path="/manageApplications" element={<PrivateRoute component ={ManageApplications} />} />
        <Route path="/reviewApplications" element={<PrivateRoute component ={ReviewApplications} />} />
        <Route path="/SearchApplication" element={<PrivateRoute component ={SearchApplication} />} />
        <Route path="/Calendar" element={<PrivateRoute component ={Calendar} />} />
        <Route path="/CommitteeCalendar" element={<PrivateRoute component ={CommitteeCalendar} />} />
        <Route path="/AdminCalendar" element={<PrivateRoute component ={AdminCalendar} />} />
        <Route path="/Schedule" element={<PrivateRoute component ={Schedule} />} />
        {/*<Route path="/statusBar" element={<PrivateRoute component ={StatusBar} />} />*/}


        {/* experiencePages */}
        <Route path="/clubExperience" element={<ClubExperience/>} />
        <Route path="/addClubExperience" element={<AddClubExperience/>} />

        <Route path="/fieldExperience" element={<FieldExperience/>} />
        <Route path="/addFieldExperience" element={<AddFieldExperience/>} />

        <Route path="/honorsExperience" element={<HonorsExperience/>} />
        <Route path="/addHonorsExperience" element={<AddHonorsExperience/>} />

        <Route path="/labExperience" element={<LabExperience/>} />
        <Route path="/addLabExperience" element={<AddLabExperience/>} />

        <Route path="/volunteerExperience" element={<VolunteerExperience/>} />
        <Route path="/addVolunteerExperience" element={<AddVolunteerExperience/>} />

        <Route path="/workExperience" element={<WorkExperience/>} />
        <Route path="/addWorkExperience" element={<AddWorkExperience/>} />
        <Route path="/HomePage" element={<HomePage/>} />

        <Route path="/headshot" element={<PrivateRoute component ={Headshot}/>} />
    </Routes>
    
    <section className="container">
      { <Alert /> }
      <Routes>  
      
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      
      
      
      <Route path="/test" element={<UploadPicture/>} />
      </Routes>
    </section>
    </Fragment>
    </BrowserRouter>
    </Provider>
  );
}



export default App;
