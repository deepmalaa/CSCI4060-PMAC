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


const initialState = {
  applicant_id: '',
  name_applicant: '',
  status: '',
  name_evaluator: '',
  application: '',
  interviewEvaluation: '',
  file: '',
};


const AddEvaluation = ({ getProfileById, auth: { user }, profile: { profile }, addEvaluation }) => {
  const navigate = useNavigate();
  const { userid } = useParams();
  const [formData, setFormData] = useState({
    initialState
  });

  const { applicant_id, name_applicant, name_evaluator, application, interviewEvaluation, file } = formData;
  useEffect(() => {getProfileById(userid);
    if (profile) {
      setFormData({
        applicant_id: userid,
        name_applicant: `${profile.fname} ${profile.mname} ${profile.lname}`,
        name_evaluator: user && user.name,
        application: '',
        interviewEvaluation: '',
        file: '',
        status: 'Committee Member'
      });
    }
  },[getProfileById, userid]);


  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleQuillEdit = (value) => {
    setFormData((prev) => {
        return {
          ...prev,
          interviewEvaluation: value
        }
      })
    }
    

    if (profile && user) {

      
      
      return (
        
        <section className="container">
          <Sidebar role="committe" />
          <h1 className="large text-primary">Evaluation for {name_applicant}</h1>

          <div>
            <a href={`/${profile._id}`} className="btn btn-light my-1">View Application</a>
            <a href={`/api/image/${profile.headshot}`} className="btn btn-light my-1">View Headshot</a>
            <a href={`/ViewFacultyRecommendation/${profile.user._id}`} className="btn btn-light my-1"> View Recommendations</a>
            <a href={`/api/transcript/${profile.transcript}`} className="btn btn-light my-1">View Transcript</a>
            <a href={`/api/personalstatement/${profile.personal_statement}`} className="btn btn-light my-1">View Personal Statement</a>
          </div>

          <form className={s.form} style={{ height: '100%', width: '100%' }}
            onSubmit={(e) => {
              e.preventDefault();
              addEvaluation(formData, profile.user._id).then(() => navigate(`/CandidateEvaluations/${userid}`));
            } }
          >

            <div className="form-group">
              <input
                type="text"
                placeholder="application"
                name="application"
                value={application}
                onChange={onChange} />
            </div>


            <div className="form-group">
              <label htmlFor="interviewEvaluation"></label>
              <ReactQuill
                style={{ height: '400px' }}
                className="personal-statement-input"
                name="interviewEvaluation"
                value={interviewEvaluation}
                onChange={handleQuillEdit}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link', 'image',],
                    ['clean'],
                  ],
                }} />
            </div>
            <div style={{marginTop:'50px'}}>
            <Link className="btn btn-light my-1" to="/EvaluationSelectUser">
                Go Back
              </Link><input
                type="submit"
                value="Submit"
                className="fab fa-black-tie text-primary" />
            </div>
        </form>
      </section>

        
      );
    }
  };

AddEvaluation.propTypes = {
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

export default connect(mapStateToProps, { getProfileById, loadUser , addEvaluation })(AddEvaluation);

