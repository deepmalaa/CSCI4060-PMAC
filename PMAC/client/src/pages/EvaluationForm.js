import React, { useState } from 'react';
import axios from 'axios';
import s from '../styles/ApplicantInformation.module.css';
import Sidebar from '../components/layout/Sidebar';

function EvaluationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    personal_statement_rating: '',
    profile_rating: '',
    academics_rating: '',
    extracurricular_activities_rating: '',
    research_experience_rating: '',
    pass_fail: '',
    feedback: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/api/submit-feedback', formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const calculateOverallScore = () => {
    const ratings = Object.values(formData)
      .filter((value) => typeof value === 'string' && value !== '' && value !== 'pass' && value !== 'fail' && value !== formData.feedback)
      .map((value) => Number(value));
    const averageRating = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
    return Math.round(averageRating * 10) / 10; // round to one decimal place
};

  const overallScore = calculateOverallScore();

  return (
    <>
    <Sidebar role="committe" />
    <div className={s.body}>
        <div className={s.top}>
            <div className={s.goldBars}> </div>
            <div className={s.whiteBar}>
                <ul>
                    <li><a href="/dashboardCommittee">Home</a></li>
                </ul>
            </div>
            <div className={s.goldBars}> </div>
        </div>
    </div>

    <form onSubmit={handleSubmit} className={s.form} style={{marginTop:'10%'}}>
        <div style={{display: 'block', textAlign: 'left'}}>
      <p>Evaluator: Committeename</p>
      <p>Evaluation Date: date evaluated</p>
      <p>Candidate: candidateName</p>
      <p>Candidate Email: candidate email</p>
      <p>Application Submission: submission date</p>
      <br />
      <br />
      <label>
        Personal Statement:
        <select
          name="personal_statement_rating"
          value={formData.personal_statement_rating}
          onChange={handleChange}>
          <option value="">-- Select a rating --</option>
          <option value="1">1 - Poor personal statement</option>
          <option value="2">2 - Below average personal statement</option>
          <option value="3">3 - Average personal statement</option>
          <option value="4">4 - Good personal statement</option>
          <option value="5">5 - Excellent personal statement</option>
        </select>
      </label>
      <br />
      <label>
        Candidate's Profile:
        <select name="profile_rating" value={formData.profile_rating} onChange={handleChange}>
          <option value="">-- Select a rating --</option>
          <option value="1">1 - Poor display of profile</option>
          <option value="2">2 - Below average display of profile</option>
          <option value="3">3 - Average academic display of profile</option>
          <option value="4">4 - Good academic display of profile</option>
          <option value="5">5 - Excellent academic display of profile</option>
        </select>
      </label>
      <br />
      <label>
        Academics:
        <select name="academics_rating" value={formData.academics_rating} onChange={handleChange}>
          <option value="">-- Select a rating --</option>
          <option value="1">1 - Poor academic record</option>
          <option value="2">2 - Below average academic record</option>
          <option value="3">3 - Average academic record</option>
          <option value="4">4 - Good academic record</option>
          <option value="5">5 - Excellent academic record</option>
        </select>
      </label>
      <br />
      <label>
        Extracurricular Activities:
        <select
          name="extracurricular_activities_rating"
          value={formData.extracurricular_activities_rating}
          onChange={handleChange}>
          <option value="">-- Select a rating --</option>
          <option value="1">1 - Poor extracurricular activities</option>
          <option value="2">2 - Below average extracurricular activities</option>
          <option value="3">3 - Average extracurricular activities</option>
          <option value="4">4 - Good extracurricular activities</option>
          <option value="5">5 - Excellent extracurricular activities</option>
        </select>
      </label>
      <br />
      <label>
        Research Experience:
        <select name="research_experience_rating" value={formData.research_experience_rating} onChange={handleChange}>
          <option value="">-- Select a rating --</option>
          <option value="1">1 - No research experience</option>
          <option value="2">2 - Limited research experience</option>
          <option value="3">3 - Some research experience</option>
          <option value="4">4 - Considerable research experience</option>
          <option value="5">5 - Extensive research experience</option>
        </select>
      </label>
      <br />
      <label>
      Medical Application
        <select name="MA_pass_fail" value={formData.MA_pass_fail} onChange={handleChange}>
          <option value="">-- Select an option --</option>
          <option value="pass">Pass</option>
          <option value="fail">Fail</option>
        </select>
      </label>
      <br />
      <label>
      Osteopathic Medical Application
        <select name="OMA_pass_fail" value={formData.OMA_pass_fail} onChange={handleChange}>
          <option value="">-- Select an option --</option>
          <option value="pass">Pass</option>
          <option value="fail">Fail</option>
        </select>
      </label>
      <br />
      <label>
      Physician Assistant Application
        <select name="PAA_pass_fail" value={formData.PAA_pass_fail} onChange={handleChange}>
          <option value="">-- Select an option --</option>
          <option value="pass">Pass</option>
          <option value="fail">Fail</option>
        </select>
      </label>
      <br />
      <label>
      Dental Application
        <select name="DA_pass_fail" value={formData.DA_pass_fail} onChange={handleChange}>
          <option value="">-- Select an option --</option>
          <option value="pass">Pass</option>
          <option value="fail">Fail</option>
        </select>
      </label>
      <br />
      <label>
      Other(ex: Podiatry) Application
        <select name="Other_pass_fail" value={formData.Other_pass_fail} onChange={handleChange}>
          <option value="">-- Select an option --</option>
          <option value="pass">Pass</option>
          <option value="fail">Fail</option>
        </select>
      </label>
      <br />
      <label>
        Feedback:
        <textarea name="feedback" value={formData.feedback} onChange={handleChange} />
      </label>
    </div>
      <br />
        <button type="submit" className="btn btn-primary my-1" onClick={handleSubmit}>
            Submit
        </button>
      <br />
      <br />
      <label>
        Overall Score: {overallScore} out of 5
      </label>
    </form>
    </>
  );
}
export default EvaluationForm;