import React, { useEffect  }  from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import ImageUpload from '../components/imageUpload/transcriptUpload'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getCurrentProfile, getProfileById } from '../actions/profile';

const StudentProfile = ({getProfileById, profile: {profile}, auth}) => {
    const { userid } = useParams();
    console.log(userid);
    useEffect(() => {
        if(!profile){
            getProfileById(userid)}
      },[getProfileById, userid]);
      console.log(profile)
       
    return(
        <div>
        <Sidebar />
        <p>hi {profile.fname} </p>
        <div>
        </div>
      </div>
    );

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