<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useEffect  }  from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import ImageUpload from '../components/imageUpload/transcriptUpload'
>>>>>>> 6979255021846a518a723bb24f45b6639d067f1f
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import Sidebar from '../components/layout/Sidebar';

<<<<<<< HEAD
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
=======
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
>>>>>>> 6979255021846a518a723bb24f45b6639d067f1f

StudentProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  getUserProfile: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(StudentProfile);
