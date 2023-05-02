import React, { useState, useEffect } from 'react';
import { getCurrentProfile } from '../../actions/profile';
import { getAllProfile, getSearchProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from '../../styles/statusBar.module.css';
import { getWaiver } from '../../actions/applicantRelease';
import { useSelector } from 'react-redux';
import { getFacultyForms } from '../../actions/facultyForm';
import { getSchemas } from '../../actions/calendar';
import jwt from 'jwt-decode';
import {
  FaCheck,
  FaCheckCircle
}
from "react-icons/fa";
const StatusBar = ({
  getCurrentProfile,   
  profile: { profile },
  getWaiver,
  getFacultyForms,
  getSchemas
}) => {
  const [waivers, setWaivers] = useState([]);
  const [facultyForms, setFacultyForms] = useState([]);
  const [schemas, setSchemas] = useState([]);
  const [circle1Color, setCircle1Color] = useState('');
  const [circle2Color, setCircle2Color] = useState('');
  const [circle3Color, setCircle3Color] = useState('');
  const [circle4Color, setCircle4Color] = useState('');
  const [circle5Color, setCircle5Color] = useState('');
  const [circle6Color, setCircle6Color] = useState('');
  const [circle7Color, setCircle7Color] = useState('');
  const userR = jwt(localStorage.token);
  //let count = 0;


  useEffect(() => {
    const fetchWaivers = async () => {
      //Waivers
      const data = await getWaiver();
      setWaivers(data);

      //FacultyForms
 
      const data1 = await getFacultyForms(userR.user.id);
      setFacultyForms(data1);

      //Schedule
      const data3 = await getSchemas();
      setSchemas(data3);

    };
    fetchWaivers();
    getCurrentProfile();
  }, []);


  const count = [    circle1Color,    circle2Color,    circle3Color,    circle4Color,    circle5Color,    circle6Color,    circle7Color  ].filter(color => color === '#009E60').length;

 

  useEffect(() => {
    if (waivers != null && waivers.authorize) {
      setCircle2Color('#009E60');
    }
    if (facultyForms != null) {
      setCircle7Color('#009E60');
    }
    if (profile != null) {
      setCircle1Color('#009E60');
    if (schemas.length > 0) {
      setCircle5Color('#009E60');
    }

    if (profile.headshot) {
      setCircle6Color('#009E60');
    }
    if (profile.transcript) {
      setCircle4Color('#009E60');
    }
    if (profile.personal_statement) {
      setCircle3Color('#009E60');
    }
    }
  }, [waivers, facultyForms, profile]);
  
      
  
  
//icon={faCheck}
//<FaCheckCircle />

  return (
    <div>
      
        <div className = {s.container}>

        <div className={s.grayRight}>
                <span>Status</span>
                <ul>
                  <li> <div className={s.circle} style={{ backgroundColor: circle1Color }}></div><a href="/ApplicationForm">Application Form</a></li>
                  <li><div className={s.circle} style={{ backgroundColor: circle2Color }}></div><a href="/ApplicantRelease">Release Form</a></li>
                  <li><div className={s.circle} style={{ backgroundColor: circle3Color }}></div><a href="/uploadpersonalstatement">Personal Statement</a></li>
                  <li><div className={s.circle} style={{ backgroundColor: circle4Color }}></div><a href="/transcript">Unofficial Transcript</a></li>
                  <li><div className={s.circle} style={{ backgroundColor: circle5Color }}></div><a href="/Calendar">Schedule</a></li>
                  <li><div className={s.circle} style={{ backgroundColor: circle6Color }}></div><a href="/headshot">Photo</a></li>
                  <li><div className={s.circle} style={{ backgroundColor: circle7Color }}></div><a href="/QuestionsPage">Recommendation Letter</a></li>
                </ul>
                <div><br />{count} of 7 completed</div>
              </div>
              
        </div>
      
    </div>
  );
}

StatusBar.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    getWaiver: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    getFacultyForms: PropTypes.func.isRequired,
    getSchemas: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    profile: state.profile,
    auth: state.auth,
    
  });
  
  export default connect(mapStateToProps, { getWaiver, getCurrentProfile, getFacultyForms, getSchemas })(
    StatusBar
  );