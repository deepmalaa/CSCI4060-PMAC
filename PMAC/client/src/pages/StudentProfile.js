import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import Sidebar from '../components/layout/Sidebar';

function StudentProfile() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data based on the ID in the URL
    fetch(`/api/profile/user/${id}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  console.log(userData);
  return (
    <div>
      <Sidebar role = "admin"/>
      <h1>{userData.fname}</h1>
      <p>Email: {userData.email}</p>
      <p>CWID: {userData.cwid}</p>
      {/* Display additional user information here */}
    </div>
  );
};

StudentProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  getUserProfile: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(StudentProfile);
