import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  getSearchProfile } from '../actions/profile';


const PersonalStatement = ({
  profile: { profile, loading },
  getSearchProfile,
  match
}) => {
  useEffect(() => {
    getSearchProfile(match.params.cwid);
  }, [getSearchProfile, match.params.cwid]);

  return loading || profile === null ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1>{profile.fname} {profile.lname}'s Personal Statement</h1>
      <p>{profile.personalStatement}</p>
    </div>
  );
};

PersonalStatement.propTypes = {
  profile: PropTypes.object.isRequired,
  getSearchProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {  getSearchProfile })(PersonalStatement);