import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';

import Sidebar from '../components/layout/Sidebar';
import Search from '../components/layout/Search';

const ManageUsers = ({
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
      
      <h1 style={{ color: 'red', fontSize: '36px', textAlign: 'center' }}>Search For Users</h1>
        <Search />
      </div>
    </>
  );
};

ManageUsers.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(
  ManageUsers
);
