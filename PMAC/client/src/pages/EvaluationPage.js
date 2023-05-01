import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from '../components/layout/Sidebar';
import { getProfileById } from '../actions/profile';

const InterviewEvaluation = ({ getProfileById, auth: { user }, profile: { profile } }) => {
  const { userid, exp_id } = useParams();

  useEffect(() => {
    getProfileById(userid);
  }, [getProfileById, userid]);

  const [item, setItem] = useState({ _id: null });

  let exp;

  if (profile && profile.interview_evaluation) {
    exp = profile.interview_evaluation.find((item) => item._id === exp_id);
  }

  return (
    <div>
      <h2 className="my-2">Interview Evaluation</h2>
      <Sidebar role="committe" />
      
      <form>
        <p>{exp_id && `Evaluation ID: ${exp_id}`}</p>
        <p>{exp && `Candidate: ${exp.name_applicant}`}</p>
        <p>{exp && `Evaluator: ${exp.name_evaluator}`}</p>
        <p>{exp && `Interview Evaluation: ${exp.interviewEvaluation}`}</p>
      </form>
    </div>
  );
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

export default connect(mapStateToProps, { getProfileById })(InterviewEvaluation);