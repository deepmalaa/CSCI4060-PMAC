import React, { useState, useEffect } from 'react';
import { getCurrentProfile } from '../../actions/profile';
import { getAllProfile, getSearchProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from '../../styles/statusBar.module.css';
import { getWaiver } from '../../actions/applicantRelease';
import { useSelector } from 'react-redux';
import { getFacultyForms } from '../../actions/facultyForm';

const StatusBar = ({
  getCurrentProfile,   
  profile: { profile },
  getWaiver,
  getFacultyForms
}) => {
  const [waivers, setWaivers] = useState([]);
  const [facultyForms, setFacultyForms] = useState([]);


  useEffect(() => {
    const fetchWaivers = async () => {
      //Waivers
      const data = await getWaiver();
      setWaivers(data);

      //FacultyForms
      const data1 = await getFacultyForms();
      setFacultyForms(data1);
    };
    fetchWaivers();
    getCurrentProfile();
  }, [getWaiver, getCurrentProfile, getFacultyForms, facultyForms]);


  
 // console.log(src);

  // State Handler  
  const circleElements = document.querySelectorAll(`.${s.circle}`);

  var waiver = waivers.authorize;
  if (waiver != null){
    circleElements[1].style.backgroundColor = 'green';
  }
  
  var facultyForm = facultyForms;
  if (facultyForm != null && circleElements[6]) {
    circleElements[6].style.backgroundColor = 'green';
  }

  if (profile != null && circleElements[0]) {
    circleElements[0].style.backgroundColor = 'green';
  }

  return (
    <div>
      
        <div className = {s.container}>

        <div className={s.grayRight}>
                <span>Status</span>
                <span> </span>
                

                
                <ul>
                  <li><div className = {s.circle}>{
                    
                  }</div><a href="#Home">Application Form</a></li>
                  <li><div className = {s.circle}></div><a href="#account">Release Form</a></li>
                  <li><div className = {s.circle}></div><a href="#contact">Personal Statement</a></li>
                  <li><div className = {s.circle}></div><a href="#Help">Unofficial Transcript</a></li>
                  <li><div className = {s.circle}></div><a href="#Home">Schedule</a></li>
                  <li><div className = {s.circle}></div><a href="#account">Photo</a></li>
                  <li><div className = {s.circle}></div><a href="#Help">Recommendation Letter</a></li>
                </ul>
              </div>
        </div>
      
    </div>
  );
}

StatusBar.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    getWaiver: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    getFacultyForms: PropTypes.func.isRequired
  };
  
  const mapStateToProps = (state) => ({
    profile: state.profile,
    auth: state.auth,
    
  });
  
  export default connect(mapStateToProps, { getWaiver, getCurrentProfile, getFacultyForms })(
    StatusBar
  );