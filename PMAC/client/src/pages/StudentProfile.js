
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
    
    <div className={s.entire}>
      <h2 className={s.topHeader}>Application Information</h2>
      <Sidebar role ="admin"/>
      <div className={s.date1}><b>Application Submitted Date: </b> {new Date(profile.date).toLocaleString()}</div>
      <form className={s.form}>
        <div className={s.firstArea}>
          <div className={s.left}>
            <label>First Name: </label>
            <input type="text" value={profile.fname} />
          </div>

          <div className={s.left}>
            <label>Middle Name: </label>
            <input type="text" value={profile.mname} />
          </div>

          <div className={s.left}>
            <label>Last Name: </label>
            <input type="text" value={profile.lname} />
          </div>

          <div className={s.left3}>
            <label>CWID: </label>
            <input type="text" value={profile.cwid} />
          </div>

          <div className={s.left2}>
            <label>Address: </label>
            <input type="text" value={profile.address} />
          </div>

          <div className={s.clear}> </div>

          <div className={s.left}>
            <label>Cell #: </label>
            <input type="text" value={profile.cell} />
          </div>

          <div className={s.left}>
            <label>ULM Email: </label>
            <input type="text" value={profile.ulm_email} />
          </div>

          <div className={s.left}>
            <label>Alt Email: </label>
            <input type="text" value={profile.alt_email} />
          </div>
        </div>

        <div className={s.clear}> </div>

        

        <div className={s.secondArea}>
          <div className={s.thinLine}></div>
          <div className={s.left}>
            <label>Major: </label>
            <input type="text" value={profile.major} />
          </div>

          <div className={s.left}>
            <label>Minor: </label>
            <input type="text" value={profile.minor} />
          </div>

          <div className={s.left}>
            <label>GPA: </label>
            <input type="text" value={profile.gpa} />
          </div>

          <div className={s.date}><b>Date of Expected Graduation from ULM: </b>{new Date(profile.grad_date).toLocaleString()}</div>
          <div className={s.date}><b>Date of Proposed Entrance to Professional School: </b> {new Date(profile.entrance_date).toLocaleString()}</div>
        </div>


        <div className={s.clear}> </div>

        <div className={s.thirdArea}>
          <div className={s.thinLine}></div>
          <div className={s.left1}>
            <label>MCAT: </label>
            <input type="text" value={profile.mcat} />
          </div>

          <div className={s.left1}>
            <label>DAT: </label>
            <input type="text" value={profile.dat} />
          </div>

          <div className={s.left1}>
            <label>OAT: </label>
            <input type="text" value={profile.oat} />
          </div>

          <div className={s.left1}>
            <label>GRE: </label>
            <input type="text" value={profile.gre} />
          </div>

          <div className={s.scores}>
            <label>Score Breakdown: </label>
            <input type="text" value={profile.scoreBreakdown} />
          </div>

          <div className={s.date1}><b>Date of exam taken or expected date of exam:</b> {new Date(profile.exam_date).toLocaleString()}</div>
        </div>

        

        <div className={s.fourthArea}>
          <div className={s.thinLine}></div>
          <div className={s.scores}>
            <label>Type of School Apllication will be sent: </label>
            <input type="text" value={profile.schoolType} />
          </div>

          <div className={s.left}>
            <label>AMCAS Letter ID: </label>
            <input type="text" value={profile.amcas_id} />
          </div>

          <div className={s.left}>
            <label>AAMC ID#: </label>
            <input type="text" value={profile.aamc_id} />
          </div>

          <div className={s.left}>
            <label>AACOMAS CAS#: </label>
            <input type="text" value={profile.aacomas_id} />
          </div>

          <div className={s.left}>
            <label>CASPA CAS#: </label>
            <input type="text" value={profile.caspa_id} />
          </div>

          <div className={s.left}>
            <label>AADSAS ID#: </label>
            <input type="text" value={profile.aadsas_id} />
          </div>
        </div> 

      </form>
      <br />
      <div className={s.profile}>
        <h2 className={s.hTwoHeader}>Honors</h2>
        <table className={s.profileTable}>
          <thead className={s.tableHead}>
            <tr className={s.tableData}>
              <th>Title</th>
              <th>Company</th>
              <th>Years</th>
              <th className={s.description}>Description</th>
            </tr>
          </thead>
          <tbody>
            {honors}
          </tbody>
        </table>
        <br />

        <h2 className={s.hTwoHeader}>Work Experience</h2>
        <table className={s.profileTable}>
          <thead className={s.tableHead}>
            <tr className={s.tableData}>
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

        <h2 className={s.hTwoHeader}>Club Experience</h2>
        <table className={s.profileTable}>
          <thead className={s.tableHead}>
            <tr className={s.tableData}>
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

        <h2 className={s.hTwoHeader}>Field Experience</h2>
        <table className={s.profileTable}>
          <thead className={s.tableHead}>
            <tr className={s.tableData}>
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

        <h2 className={s.hTwoHeader}>Lab Experience</h2>
        <table className={s.profileTable}>
          <thead className={s.tableHead}>
            <tr className={s.tableData}>
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
          
        <h2 className={s.hTwoHeader}>Volunteer Experience</h2>
        <table className={s.profileTable}>
          <thead className={s.tableHead}>
            <tr className={s.tableData}>
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
          <a href={`/ViewFacultyRecommendation/${profile.user._id}`} className="btn btn-light my-1"> View Recommendations</a>
          <a href={`/api/transcript/${profile.transcript}`} className="btn btn-light my-1">View Transcript</a>
          <a href={`/api/personalstatement/${profile.personal_statement}`} className="btn btn-light my-1">View Personal Statement</a>
          </div>
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