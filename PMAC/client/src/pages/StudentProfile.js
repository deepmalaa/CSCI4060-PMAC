
import React, { useEffect  }  from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProfileById } from '../actions/profile';
import {loadUser} from '../actions/auth';
import s from '../styles/StudentProfile.module.css';

const StudentProfile = ({getProfileById, auth:{user}, profile: {profile},}) => {
    const { userid } = useParams();
    useEffect(() => {
      getProfileById(userid)

      },[getProfileById, userid]);
      
    let experiences = "No Work Experience Added";
    let club_experiences = "No Club Experience Added";
    let field_experiences = "No Field Experience Added";
    let lab_experiences = "No Lab Experience Added";
    let volunteer_experiences = "No volunteer Experience Added";
    let honors = "No Honors Added";

    

    if (profile){

    if(profile.work_experience.length !== 0) {experiences = profile.work_experience.map((exp) => (

        <tr key={exp._id}>
          <td >{exp.title}</td>
          <td>{exp.company}</td>
          <td>{exp.years}</td>
          <td>{exp.description}</td>
        </tr>
    ))}
    

    if (profile.club_experience.length !== 0){club_experiences = profile.club_experience.map((exp) => (

        <tr key={exp._id}>
          <td >{exp.title}</td>
          <td>{exp.company}</td>
          <td>{exp.years}</td>
          <td>{exp.description}</td>
        </tr>
    ))}

    if (profile.field_experience.length !== 0){field_experiences = profile.field_experience.map((exp) => (

        <tr key={exp._id}>
          <td >{exp.title}</td>
          <td>{exp.company}</td>
          <td>{exp.years}</td>
          <td>{exp.description}</td>
        </tr>
    ))}

    if (profile.lab_experience.length !== 0){lab_experiences = profile.lab_experience.map((exp) => (

        <tr key={exp._id}>
          <td >{exp.title}</td>
          <td>{exp.company}</td>
          <td>{exp.years}</td>
          <td>{exp.description}</td>
        </tr>
    ))}

    if (profile.volunteer_experience.length !== 0){volunteer_experiences = profile.volunteer_experience.map((exp) => (

        <tr key={exp._id}>
          <td >{exp.title}</td>
          <td>{exp.company}</td>
          <td>{exp.years}</td>
          <td>{exp.description}</td>
        </tr>
    ))}

    if (profile.honors.length !== 0){honors = profile.honors.map((exp) => (

        <tr key={exp._id}>
        <td >{exp.title}</td>
        <td>{exp.company}</td>
        <td>{exp.years}</td>
        <td>{exp.description}</td>
      </tr>
      ))
      }

   if(user && user.type !== "Student"){
    return(
    
<<<<<<< HEAD
        <div className={s.profile}>
          <Sidebar role ="admin"/>
      <h1>Application Information</h1>
      <p>Application Submitted Date: {profile.date}</p>
      <p>First Name: {profile.fname} &nbsp;
      &nbsp; Middle Name: {profile.mname} &nbsp; 
         Last Name: {profile.lname}</p>
      <p>Email: {profile.ulm_email}</p>
=======
    <div className={s.profile}>
      <h2 style={{marinBottom:'25px'}}>Application Information</h2>
      <Sidebar role ="admin"/>
      <p>Application Submitted Date: {new Date(profile.date).toLocaleString()}</p>
      <p>First Name: {profile.fname}</p>
      <p>Middle Name: {profile.mname}</p>
      <p>Last Name: {profile.lname}</p>
      <p>Email: {profile.email}</p>
>>>>>>> ffe0668b8e61c036ed96c593d1510b957cf5cf60
      <p>Phone: {profile.cell}</p>
      <p>Address: {profile.address}</p>
      <p>CWID: {profile.cwid}</p>
      <p>Cell Phone: {profile.phone}</p>
      <p>ULM E-mail Address: {profile.ulm_email}</p>
      <p>Alternate email: {profile.alt_email}</p>
      <p>Major: {profile.major}</p>
      <p>Minor: {profile.minor}</p>
      <p>Date of Expected Graduation from ULM: {new Date(profile.grad_date).toLocaleString()}</p>
      <p>Overall Collegiate GPA: {profile.gpa}</p>
      <p>Date of Proposed Entrance to Professional School: {new Date(profile.entrance_date).toLocaleString()}</p>
      <p>Score of your most recent professional entry exam (MCAT, DAT, OAT, GRE): </p>
      <p>Date of exam taken or expected date of exam: {new Date(profile.exam_date).toLocaleString()}</p>
      <p>Type of School Application will be sent: {profile.schoolType}</p>
      <p>AMCAS Letter ID:{profile.amcas_id}</p>
      <p>AAMC ID#:{profile.aamc_id}</p>
      <p>AACOMAS CAS#:{profile.aacomas_id}</p>
      <p>CASPA CAS#:{profile.caspa_id}</p>
      <p>AADSAS ID#:{profile.aadsas_id}</p>
      <br />
      <h2>Honors</h2>
      <table>
        
          <tr>
            <td>Title</td>
            <td>Company</td>
            <td>Years</td>
            <td>Description</td>
          </tr>
       
      
          {honors}
       
      </table>
      <br />

      <h2>Work Experience</h2>
      <table>
        
          <tr>
            <td>Title</td>
            <td>Company</td>
            <td>Years</td>
            <td>Description</td>
          </tr>
        
       
          {experiences}
        
      </table>
      <br />

      <h2>Club Experience</h2>
      <table>
        
          <tr>
            <td>Title</td>
            <td>Company</td>
            <td>Years</td>
            <td>Description</td>
          </tr>
        
       
          {club_experiences}
        
      </table>
      <br />

      <h2>Field Experience</h2>
      <table>
        
          <tr>
            <td>Title</td>
            <td>Company</td>
            <td>Years</td>
            <td>Description</td>
          </tr>
        
        
        {field_experiences}
       
      </table> 
      <br />

      <h2>Lab Experience</h2>
      <table>
        
          <tr>
            <td>Title</td>
            <td>Company</td>
            <td>Years</td>
            <td>Description</td>
          </tr>
      
        
        {lab_experiences}
       
        </table> 
        <br />
        
        <h2>Volunteer Experience</h2>
        <table>
       
          <tr>
            <td>Title</td>
            <td>Company</td>
            <td>Years</td>
            <td>Description</td>
          </tr>
       
        
          {volunteer_experiences}
        
        </table> 
        <div>
        <a href={`/api/image/${profile.headshot}`} className="btn btn-light my-1">View Headshot</a>
        <a href={`/ViewFacultyRecommendation/${profile.user._id}`} className="btn btn-light my-1"> View Recommendations</a>
        <a href={`/api/transcript/${profile.transcript}`} className="btn btn-light my-1">View Transcript</a>
        <a href={`/api/personalstatement/${profile.personal_statement}`} className="btn btn-light my-1">View Personal Statement</a>
        </div>

      </div>
    );}}
  }
  StudentProfile.propTypes = {
      getProfileById: PropTypes.func.isRequired,
      auth: PropTypes.object.isRequired,
      profile: PropTypes.object.isRequired
  
  
    };
  
  const mapStateToProps = (state) => ({
      auth: state.auth,
      profile: state.profile
    });
  
  export default connect(mapStateToProps, {getProfileById, loadUser})(
      StudentProfile
    
  );