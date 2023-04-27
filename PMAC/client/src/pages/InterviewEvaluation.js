import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from '../components/layout/Sidebar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getProfileById } from '../actions/profile';
import {loadUser} from '../actions/auth';
import { Link, useParams } from 'react-router-dom';
import s from '../styles/ApplicantInformation.module.css';

const InterviewEvaluation = ({ getProfileById, auth: {user}, profile: {profile}, loadUser }) => {
  const {userid} = useParams();

  useEffect(() => {getProfileById(userid)},[getProfileById, userid]);
  
  const [interviewEvaluation, setInterviewEvaluation] = useState('');
  const [file, setFile] = useState(null);

  const handleInputChange = (value) => {
    setInterviewEvaluation(value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileClear = () => {
    setFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('interviewEvaluation', interviewEvaluation);
    formData.append('file', file);

    try {
      const response = await fetch('/api/interview-evaluation', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${user.name}`,
          'Contact': user.email}
      });
      if (response.ok) {
        setInterviewEvaluation('');
        setFile(null);
        alert('Submission successful!'); // Display a success message
      } else {
        alert('Submission failed.'); // Display an error message
      }
    } catch (error) {
      console.error(error);
    }
  };

  if(profile) {
    return (
      <>
        <div className="container">
          <Sidebar role="committee" />
          <div className={s.body}>
            <div className={s.top}>
                <div className={s.goldBars}> </div>
                <div className={s.whiteBar}>
                    <ul>
                        <li><a href="/dashboardCommittee">Home</a></li>
                        <li><a href="/StudentContactPage">Contact</a></li>
                    </ul>
                </div>
                <div className={s.goldBars}> </div>
            </div>
           </div>
          <h1>Evaluation for {profile.fname} {profile.mname} {profile.lname}</h1> 
          <div>
            <a href={`/api/image/${profile.headshot}`} className="btn btn-light my-1">View Headshot</a>
            <a href={`/ViewFacultyRecommendation/${profile.user._id}`} className="btn btn-light my-1"> View Recommendations</a>
            <a href={`/api/transcript/${profile.transcript}`} className="btn btn-light my-1">View Transcript</a>
            <a href={`/api/personalstatement/${profile.personal_statement}`} className="btn btn-light my-1">View Personal Statement</a>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className={s.form} style={{height: '600px'}}>
            <div className="form-group">
              <label htmlFor="interviewEvaluation"></label>
              <ReactQuill
                style={{ height: '400px'}}
                className="personal-statement-input"
                value={interviewEvaluation}
                onChange={handleInputChange}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link', 'image', ],
                    ['clean'],
                  ],
                }}
              />
              
            </div>
            <div className="form-group">
              <label htmlFor="file" style={{backgroundColor:'lightGrey'}}>Upload File</label>
              {file && (
                <div>
                  <span>{file.name}</span>
                  <button type="button" className="form-group" onClick={handleFileClear}>
                    Remove
                  </button>
                </div>
              )}
              {!file && (
                <input
                  type="file"
                  accept=".pdf"
                  className="form-control"
                  onChange={handleFileChange}
                />
              )}
            </div>
            <button type="submit" className="btn btn-primary my-1" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </>
    );
  } 
  else {
    return (
      <div>
        Loading...
      </div>
    )
  }
};

InterviewEvaluation.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileById, loadUser })(
  InterviewEvaluation
);