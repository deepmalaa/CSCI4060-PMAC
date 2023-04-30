import React, { useState, useEffect } from 'react';
import { getCurrentProfile, updateStatus } from '../../actions/profile';
import { getAllProfile, getSearchProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWaiver } from '../../actions/applicantRelease';
import { useSelector } from 'react-redux';
import { getFacultyForms } from '../../actions/facultyForm';
import { getSchemas } from '../../actions/calendar';
import jwt from "jwt-decode";
// This page returns a true of false if applicant has fulfilled all requirements

const CandidateStatus = ({
  getCurrentProfile,   
  profile: { profile },
  getWaiver,
  getFacultyForms,
  getSchemas,
  updateStatus
}) => {
  const [waivers, setWaivers] = useState([]);
  const [facultyForms, setFacultyForms] = useState([]);
  const [schemas, setSchemas] = useState([]);
  const [status, setStatus] = useState([false]);
  const [awaiting, setAwaiting] = useState([true]);
  const userR = jwt(localStorage.token);
  


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




  useEffect(() => {
    
    setAwaiting(true);
    if (waivers != null && waivers.authorize && facultyForms != null && schemas.length > 0) {
        if (profile != null) {
            if (profile.headshot && profile.transcript && profile.personal_statement) {
                setStatus(true);
            }
        }
    }
    setAwaiting(false);

    if(!awaiting) {

        console.log("First: " + status)
        updateStatus(status);
      }

  }, [waivers, schemas, facultyForms]);
  
}



CandidateStatus.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    getWaiver: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    getFacultyForms: PropTypes.func.isRequired,
    getSchemas: PropTypes.func.isRequired,
    updateStatus: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    profile: state.profile,
    auth: state.auth,
    
  });
  
  export default connect(mapStateToProps, { getWaiver, getCurrentProfile, getFacultyForms, getSchemas, updateStatus })(
    CandidateStatus
  );