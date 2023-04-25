import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';

import Sidebar from '../components/layout/Sidebar';
import SearchApplication from '../components/layout/Search';

import s from '../styles/StudentProfile.module.css';

const ManageApplications = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <><div >
      <Sidebar role="admin" />
      
      <div className={s.subTitle1}>Search For a Student's Completed Application <div className={s.subTitle2}>To go to a Student's Application, click on their First Name</div></div>

      
        <SearchApplication />
      </div>
    </>
  );
};

ManageApplications.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(
  ManageApplications
);