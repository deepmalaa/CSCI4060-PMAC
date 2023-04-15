
import React, { useEffect  }  from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import ImageUpload from '../components/imageUpload/transcriptUpload'

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProfileById } from '../actions/profile';

const StudentProfile = ({getProfileById, profile: {profile}, auth}) => {
    const { userid } = useParams();
    console.log(userid);
    useEffect(() => {
        if(!profile){
            getProfileById(userid)}
      },[getProfileById, userid]);
      console.log(profile)
      
    let experiences;
    let club_experiences;
    let field_experiences;
    let lab_experiences;
    let volunteer_experiences;
    let honors;

    if (profile && profile.club_experience){

    experiences = profile.work_experience.map((exp) => (

        <tr key={exp._id}>
          <td >{exp.title}</td>
          <td>{exp.company}</td>
          <td>{exp.years}</td>
          <td>{exp.description}</td>
        </tr>
    ))

    club_experiences = profile.club_experience.map((exp) => (

        <tr key={exp._id}>
          <td >{exp.title}</td>
          <td>{exp.company}</td>
          <td>{exp.years}</td>
          <td>{exp.description}</td>
        </tr>
    ))

    field_experiences = profile.field_experience.map((exp) => (

        <tr key={exp._id}>
          <td >{exp.title}</td>
          <td>{exp.company}</td>
          <td>{exp.years}</td>
          <td>{exp.description}</td>
        </tr>
    ))

    lab_experiences = profile.lab_experience.map((exp) => (

        <tr key={exp._id}>
          <td >{exp.title}</td>
          <td>{exp.company}</td>
          <td>{exp.years}</td>
          <td>{exp.description}</td>
        </tr>
    ))

    volunteer_experiences = profile.volunteer_experience.map((exp) => (

        <tr key={exp._id}>
          <td >{exp.title}</td>
          <td>{exp.company}</td>
          <td>{exp.years}</td>
          <td>{exp.description}</td>
        </tr>
    ))

    honors = profile.honors.map((exp) => (

        <tr key={exp._id}>
          <td >{exp.title}</td>
          <td>{exp.company}</td>
          <td>{exp.years}</td>
          <td>{exp.description}</td>
        </tr>
    ))
}

    if(profile){
    return(
        <div>
        <Sidebar />
        <p>Application Submitted Date: {profile.date}</p>
        <p>First Name: {profile.fname} </p>
        <p>Middle Name: {profile.mname}</p>
        <p>Last Name: {profile.lname} </p>
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
        <p>Faculty Members Submitting Evaluations on Behalf(Name/Title/Department): {profile.facultyEval}</p>
        <p>Honors:
        <tr>
            <td>Title</td>
            <td>Company</td>
            <td>Years</td>
            <td>Description</td>
        </tr>
        
        {honors}
        </p>
       
        <p>Work Experience:
        <tr>
            <td>Title</td>
            <td>Company</td>
            <td>Years</td>
            <td>Description</td>
        </tr>
        
        {experiences}
        </p>

        <p>Club Experience:
        <tr>
            <td>Title</td>
            <td>Company</td>
            <td>Years</td>
            <td>Description</td>
        </tr>
        
        {club_experiences}
        </p>

        <p>Field Experience:
        <tr>
            <td>Title</td>
            <td>Company</td>
            <td>Years</td>
            <td>Description</td>
        </tr>
        
        {field_experiences}
        </p>

        <p>Lab Experience:
        <tr>
            <td>Title</td>
            <td>Company</td>
            <td>Years</td>
            <td>Description</td>
        </tr>
        
        {lab_experiences}
        </p>

        <p>Volunteer Experience:
        <tr>
            <td>Title</td>
            <td>Company</td>
            <td>Years</td>
            <td>Description</td>
        </tr>
        
        {volunteer_experiences}
        </p>
        <div>
        <a href={`http://localhost:5001/api/image/${profile.headshot}`} className="btn btn-light my-1">View Headshot</a>
        <a href={`http://localhost:5001/api/transcript/${profile.transcript}`} className="btn btn-light my-1">View Transcript</a>
        <a href={`http://localhost:5001/api/personalstatement/${profile.personal_statement}`} className="btn btn-light my-1">View Personal Statement</a>
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
  
  export default connect(mapStateToProps, {getProfileById})(
      StudentProfile
    
  );