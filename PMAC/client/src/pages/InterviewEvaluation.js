import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from '../components/layout/Sidebar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getProfileById } from '../actions/profile';
import {loadUser} from '../actions/auth';
import { Link, useParams } from 'react-router-dom';



const InterviewEvaluation = ({ getProfileById, auth: {user}, profile: {profile},}) => {
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
    // Add code to submit personal statement here
    try {
      // use fetch or axios to submit the formData to your backend API
      // e.g. await fetch('/api/interview-evaluation', { method: 'POST', body: formData });
    } catch (error) {
      console.error(error);
    }
  };

  if(profile) {
  return (
    <>
      <div className="container">
        <Sidebar role="committe" />
        <h1>Evaluation for {profile.fname} {profile.mname} {profile.lname}</h1> 
        <div>
          <a href={`/api/image/${profile.headshot}`} className="btn btn-light my-1">View Headshot</a>
          <a href={`/ViewFacultyRecommendation/${profile.user._id}`} className="btn btn-light my-1"> View Recommendations</a>
          <a href={`/api/transcript/${profile.transcript}`} className="btn btn-light my-1">View Transcript</a>
          <a href={`/api/personalstatement/${profile.personal_statement}`} className="btn btn-light my-1">View Personal Statement</a>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
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
                <button type="button" className="form-group" onClick={handleFileClear}>Remove</button>
              </div>
            )}
            {!file && <input type="file" className="form-control-file" id="file" onChange={handleFileChange} />}
          </div>
          <div style={{marginTop:'100px'}}>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
  }
};

InterviewEvaluation.propTypes = {
  getProfileById: PropTypes.func.isRequired,
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





