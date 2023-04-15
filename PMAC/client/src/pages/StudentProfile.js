import React, { useEffect  }  from 'react';
import Sidebar from '../components/layout/Sidebar';
import ImageUpload from '../components/imageUpload/transcriptUpload'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getCurrentProfile, getProfileById } from '../actions/profile';

const StudentProfile = ({getProfileById,nprofile: {profile}, auth, match}) => {

    useEffect(() => {
        getProfileById(match.params.id)
      });
    
    return(
        
        <div>
        <Sidebar />
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