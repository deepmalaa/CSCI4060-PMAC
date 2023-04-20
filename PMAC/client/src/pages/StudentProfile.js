
import React, { useEffect  }  from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProfileById } from '../actions/profile';
import {loadUser} from '../actions/auth';
import s from '../styles/StudentProfile.module.css';

const StudentProfile = ({getProfileById, profile: {profile},}) => {
    const { userid } = useParams();
    useEffect(() => {
      getProfileById(userid)

      },[getProfileById, userid]);
      console.log(profile)
      
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

    return(
    
        <div className={s.profile}>
          <Sidebar role ="admin"/>
      <h2>Application Information</h2>
      <p>Application Submitted Date: {profile.date}</p>
      <p>First Name: {profile.fname}</p>
      <p>Middle Name: {profile.mname}</p>
      <p>Last Name: {profile.lname}</p>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.cell}</p>
      <p>Address: {profile.address}</p>
      <p>CWID: {profile.cwid}</p>
      <p>Cell Phone: {profile.phone}</p>
      <p>ULM E-mail Address: {profile.ulm_email}</p>
      <p>Alternate email: {profile.alt_email}</p>
      <p>Major: {profile.major}</p>
      <p>Minor: {profile.minor}</p>
      <p>Date of Expected Graduation from ULM: {profile.grad_date}</p>
      <p>Overall Collegiate GPA: {profile.gpa}</p>
      <p>Date of Proposed Entrance to Professional School: {profile.entrance_date}</p>
      <p>Score of your most recent professional entry exam (MCAT, DAT, OAT, GRE): </p>
      <p>Date of exam taken or expected date of exam: {profile.exam_date}</p>
      <p>Type of School Application will be sent: {profile.schoolType}</p>
      <p>AMCAS Letter ID:{profile.amcas_id}</p>
      <p>AAMC ID#:{profile.aamc_id}</p>
      <p>AACOMAS CAS#:{profile.aacomas_id}</p>
      <p>CASPA CAS#:{profile.caspa_id}</p>
      <p>AADSAS ID#:{profile.aadsas_id}</p>
      <br />
      <h2>Honors</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Years</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {honors}
        </tbody>
      </table>
      <br />

      <h2>Work Experience</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Years</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {experiences}
        </tbody>
      </table>
      <br />

      <h2>Club Experience</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Years</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {club_experiences}
        </tbody>
      </table>
      <br />

      <h2>Field Experience</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Years</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {field_experiences}
        </tbody>
        </table> 
        <br />

        <h2>Lab Experience</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Years</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {lab_experiences}
        </tbody>
        </table> 
        <br />
        
        <h2>Volunteer Experience</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Years</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {volunteer_experiences}
        </tbody>
        </table> 
        <div>
        <a href={`/api/image/${profile.headshot}`} className="btn btn-light my-1">View Headshot</a>
        <Link to={`/api/image/${profile.headshot}`} className="btn btn-light my-1"> View </Link>
        <a href={`/api/transcript/${profile.transcript}`} className="btn btn-light my-1">View Transcript</a>
        <a href={`/api/personalstatement/${profile.personal_statement}`} className="btn btn-light my-1">View Personal Statement</a>
        </div>

      </div>
    );}
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