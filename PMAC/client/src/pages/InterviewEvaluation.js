import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from '../components/layout/Sidebar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getCurrentProfile } from '../actions/profile';

const InterviewEvaluation = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const [interviewEvaluation, setInterviewEvaluation] = useState('');

  const handleInputChange = (value) => {
    setInterviewEvaluation(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to submit personal statement here
  };

  return (
    <>
      <div className="container">
        <Sidebar role="committe" />
        <h1>Evaluation for </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="interviewEvaluation">Interview Evaluation</label>
            <ReactQuill
              style={{ height: '500px'}}
              className="personal-statement-input"
              value={interviewEvaluation}
              onChange={handleInputChange}
              modules={{
                toolbar: [
                  [{ header: [1, 2, false] }],
                  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                  [{ list: 'ordered' }, { list: 'bullet' }],
                  ['link', 'image'],
                  ['clean'],
                ],
              }}
            />
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
};

InterviewEvaluation.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(
  InterviewEvaluation
);