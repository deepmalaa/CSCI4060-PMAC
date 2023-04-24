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
            <label htmlFor="file">Upload File</label>
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