import React, { useState, useEffect } from 'react';

function StudentProfile(props) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from API using props.userId
    fetch(`/api/users/${props.userId}`)
      .then(response => response.json())
      .then(data => setUserData(data));
  }, [props.userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <div class="profile-view">
  <h2>Profile View</h2>
  
  <div class="form-group">
      <p>First Name:{userData.fName}</p>
      <p>Last Name:{userData.lName}</p>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <p>Address: {userData.address}</p>
      <p>Cell Phone: {userData.phone}</p>
      <p>ULM E-mail Address: {userData.email}</p>
      <p>Alternate email: {userData.altemail}</p>
      <p>Major: {userData.address}</p>
      <p>Minor: {userData.address}</p>
      <p>Date of Expected Graduation from ULM: {userData.address}</p>
      <p>Overall Collegiate GPA: {userData.address}</p>
      
      <p>Date of Proposed Entrance to Professional School:</p>
      <p>Score of your most recent professional entry exam (MCAT, DAT, OAT, GRE): </p>
      <p>Date of exam taken or expected date of exam:</p>
      <p>Type of School Application will be sent:</p>
      <p>AMCAS Letter ID:{userData.AMCAS}</p>
      <p>AAMC ID#:{userData.AMCAS}</p>
      <p>AACOMAS CAS#:{userData.AMCAS}</p>
      <p>CASPA CAS#:{userData.AMCAS}</p>
      <p>AADSAS ID#:{userData.AMCAS}</p>
      <p>Faculty Members Submitting Evaluations on Behalf(Name/Title/Department):</p>
  </div>
  
    </div>
    </>
  );
};


export default StudentProfile;
