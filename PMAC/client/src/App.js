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
import EvaluationForm from './pages/EvaluationForm';
import QuestionsPage from './pages/QuestionsPage';
import CreateAccount from './components/layout/CreateAccount';
import ContactPage from './pages/ContactPage';
import StudentContactPage from './pages/StudentContactPage';
import CommitteeContactPage from './pages/CommitteeContactPage';
import Calendar from './pages/Calendar';
import CommitteeCalendar from './pages/CommitteeCalendar';
import ReviewApplications from './pages/ReviewApplications';
import AdminCalendar from './pages/AdminCalendar';
import EvaluationSelectUser from './pages/EvaluationSelectUser';
import InterviewEvaluation from './pages/InterviewEvaluation';
import CandidateEvaluations from './pages/CandidateEvaluations';
import StudentQuestionsPage from './pages/StudentQuestionsPage';
import CommitteeQuestionsPage from './pages/CommitteeQuestionsPage';
import EvaluationPage from './pages/EvaluationPage';

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
import ViewFacultyRecommendation from './pages/ViewFacultyRecommendation';
import UploadPersonalStatement from './pages/UploadPersonalStatement';
import ChangePassword from './components/auth/ChangePassword';


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
        <Route path="/StudentQuestionsPage" element={<StudentQuestionsPage/>} />
        <Route path="/CommitteeQuestionsPage" element={<CommitteeQuestionsPage/>} />
        <Route path="/CreateAccount" element={<CreateAccount/>} />
        <Route path="/ContactPage" element={<ContactPage/>} />
        <Route path="/StudentContactPage" element={<StudentContactPage/>} />
        <Route path="/CommitteeContactPage" element={<CommitteeContactPage/>} />
        
        <Route path="/ApplicantInformation" element={<ApplicantInformation/>} /> 
        <Route path="/FacultyLetter" element={<FacultyLetter/>} />
        <Route path="/FacultyAdvisoryForm/:token" element={<FacultyAdvisoryForm/>} />
        <Route path="/ViewFacultyRecommendation/:userid" element={<ViewFacultyRecommendation/>} />
        <Route path="/statusPage" element={<StatusPage/>} />
        <Route path="/EvaluationSelectUser" element={<EvaluationSelectUser/>} />

        <Route path="/dashboardCommittee" element={<PrivateRoute component ={CommitteeMemberLanding} />} />
        
        {/**
        <Route path="/dashboardChair" element={<ChairLanding/>} />
        <Route path="/manageUsers" element={<ManageUsers/>} />
        <Route path="/search" element={<Search/>} />
        */}

        <Route path="/dashboardChair" element={<PrivateRoute component ={ChairLanding} />} />
        <Route path="/manageUsers" element={<PrivateRoute component ={ManageUsers} />} />
        {/* <Route path="/student-profile/:userId" component={StudentProfile} /> */}
        <Route path="/search" element={<PrivateRoute component ={Search} />} />
        <Route path="/manageApplications" element={<ManageApplications/>} />
        <Route path="EvaluationForm" element={<EvaluationForm/>} />
        <Route path="/reviewApplications" element={<PrivateRoute component ={ReviewApplications} />} />
        <Route path="/SearchApplications" element={<SearchApplication/>} />
        <Route path="/Calendar" element={<PrivateRoute component ={Calendar} />} />
        <Route path="/CommitteeCalendar" element={<PrivateRoute component ={CommitteeCalendar} />} />
        <Route path="/AdminCalendar" element={<PrivateRoute component ={AdminCalendar} />} />
        <Route path="/Schedule" element={<PrivateRoute component ={Schedule} />} />
        {/*<Route path="/statusBar" element={<PrivateRoute component ={StatusBar} />} />*/}

        <Route path="/:userid" element={<StudentProfile/>} />
        <Route path="/InterviewEvaluation/:userid" element={<InterviewEvaluation/>} />
        <Route path="/CandidateEvaluations/:userid" element={<CandidateEvaluations/>} />
        <Route path="/EvaluationPage" element={<EvaluationPage />} />
        
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

        <Route path="/headshot" element={<Headshot/>} />
        <Route path="/uploadpersonalstatement" element={<UploadPersonalStatement/>} />
    </Routes>
    
    <section className="container">
      { <Alert /> }
      <Routes>  
      
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      
      
      <Route path="/changepassword" element={<ChangePassword/>} />
      
      <Route path="/test" element={<UploadPicture/>} />
      </Routes>
    </section>
    </Fragment>
    </BrowserRouter>
    </Provider>
  );
}



export default App;
