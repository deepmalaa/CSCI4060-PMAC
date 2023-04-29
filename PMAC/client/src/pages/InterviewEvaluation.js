import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEvaluation } from '../actions/profile';
import Sidebar from '../components/layout/Sidebar';
import { getProfileById } from '../actions/profile';
import { createProfile, getCurrentProfile, saveProfile } from '../actions/profile';
import { loadUser } from '../actions/auth';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import s from '../styles/ApplicantInformation.module.css';

const InterviewEvaluation = ({ getProfileById, auth: { user }, profile: { profile }, loadUser, addEvaluation }) => {
  const navigate = useNavigate();
  const { userid } = useParams();
  const [formData, setFormData] = useState({
    name_applicant: '',
    name_evaluator: '',
    application: '',
    interviewEvaluation: '',
    file: '',
  });

  const { name_applicant, name_evaluator, application, interviewEvaluation, file } = formData;
  useEffect(() => {getProfileById(userid)},[getProfileById, userid]);


  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    
  
  
    if (profile && user) {

      let Candidate_Name = `${profile.fname} ${profile.mname} ${profile.lname}`;
      return (
        <section className="container">
          <Sidebar role="committe" />
          <h1 className="large text-primary">Evaluation for {Candidate_Name}</h1>

          <div>
            <a href={`/api/image/${profile.headshot}`} className="btn btn-light my-1">View Headshot</a>
            <a href={`/ViewFacultyRecommendation/${profile.user._id}`} className="btn btn-light my-1"> View Recommendations</a>
            <a href={`/api/transcript/${profile.transcript}`} className="btn btn-light my-1">View Transcript</a>
            <a href={`/api/personalstatement/${profile.personal_statement}`} className="btn btn-light my-1">View Personal Statement</a>
          </div>
          

          <form className={s.form} style={{height: '100%', width: '100%'}}
            onSubmit={(e) => {
              e.preventDefault();
              addEvaluation(formData, "interview_evaluation").then(() => navigate('/interviewEvaluation'));
            }}      
          >
            

            <div className="form-group" style={{display: 'block', textAlign: 'left'}}>
               Candidate
              <input
                type="text"
                name="name_applicant"
                value={Candidate_Name}
                onChange={onChange}
                readOnly
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="* name_evaluator"
                name="name_evaluator"
                value={name_evaluator}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="application"
                name="application"
                value={application}
                onChange={onChange}
                
              />
            </div>
            
            
            <div className="form-group" >
              <label htmlFor="interviewEvaluation"></label>
              <ReactQuill
                style={{ height: '400px'}}
                className="personal-statement-input"
                value={interviewEvaluation}
                onChange={onChange}
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
              <label htmlFor="file" 
              style={{backgroundColor:'lightGrey'}}>Upload File</label>
              {file && (
                <div>
                  <span>{file.name}</span>
                  <button type="button" className="form-group" onChange={onChange} value={file}>
                    Remove
                  </button>
                </div>
              )}
              {!file && (
                <input
                  type="file"
                  accept=".pdf"
                  className="form-control"
                  onChange={onChange}
                />
              )}
            </div>
            <Link className="btn btn-light my-1" to="/EvaluationSelectUser">
              Go Back
            </Link>
              <input type="submit" className="btn btn-primary" />
          </form>
        </section>
      );
    }
  };

InterviewEvaluation.propTypes = {
  addEvaluation: PropTypes.func.isRequired,
  getProfileById: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileById, loadUser , addEvaluation })(InterviewEvaluation);
