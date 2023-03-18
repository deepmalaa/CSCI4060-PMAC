import React, { useEffect  } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import '../styles/StudentLanding.css';
import CheckList from '../components/layout/CheckList';
import Sidebar from '../components/layout/Sidebar';

const StudentLanding = ({
    getCurrentProfile,
    auth: { user },
    profile: { profile }
  }) => {
    useEffect(() => {
      getCurrentProfile();
    }, [getCurrentProfile]);
    return (
        <>
        
        <div className = "dashboard ">Welcome {user && user.name}</div>
        <div className = "StudentPage1">    
          
        <Sidebar role="student" />
        <CheckList/>
        
        </div>
        </>
    )
};

StudentLanding.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  };

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
  });

export default connect(mapStateToProps, { getCurrentProfile})(
  StudentLanding
);