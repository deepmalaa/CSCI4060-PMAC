import React, { useEffect, Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEvaluation } from '../actions/profile';
import Sidebar from '../components/layout/Sidebar';
import SelectSearch from '../components/layout/SelectSearch';
import { getProfileById } from '../actions/profile';
import { loadUser } from '../actions/auth';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createProfile, getCurrentProfile, saveProfile } from '../actions/profile';
import EvaluationPage from './EvaluationPage';

const Evaluation = ({
  getProfileById,
  getCurrentProfile,
  auth: { user },
  profile: { profile }
}) => {
  const navigate = useNavigate();
  const { userid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentProfile();
    getProfileById(userid);
  }, [getCurrentProfile, getProfileById, userid]);

  const [selectedRow, setSelectedRow] = useState(null);

  let evaluation;

  if (profile && profile.interview_evaluation) {
    evaluation = profile.interview_evaluation.map((exp, index) => (
      <tr key={exp._id}>
        <td>{exp.name_evaluator}</td>
        <td>{exp.application}</td>
        <td style={{ color: 'maroon', cursor: 'pointer' }} onClick={() => setSelectedRow(index)}>View</td>
        <td>
          {exp.name_evaluator === user.name && (
            <button
              onClick={() => dispatch(deleteEvaluation(userid, exp._id))}
              className="btn btn-danger">
              Delete
            </button>
          )}
          {exp.name_evaluator !== user.name && (
            <p>Not Available</p>
          )}
        </td>
      </tr>
    ));
  }

  return (
    <Fragment>
      <h2 className="my-2">{profile?.fname} {profile?.lname}'s Evaluations</h2>
      <Sidebar role={user && user.type}/>
      {selectedRow !== null && (
        <div>
          <EvaluationPage myProp={profile?.interview_evaluation?.[selectedRow]?.interviewEvaluation} />
          <button className="btn btn-primary" onClick={() => setSelectedRow(null)}>
            <i className="fab fa-black-tie text-primary" /> Done
          </button>
        </div>
      )}
      {selectedRow === null && (
        <div>
          <div className="table">
            <thead>
              <tr>
                <th>Evaluator</th>
                <th>Application Type</th>
                <th>Written Evaluation</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{evaluation}</tbody>
          </div>
          <br />
          <Link
            to={`/InterviewEvaluation/${profile?._id}`}
            className="btn btn-primary"
          >
            <i className="fab fa-black-tie text-primary" /> Add Evaluation
          </Link>

          <div className="buttons">
            <Link className="btn btn-light my-1" to="/EvaluationSelectUser">
              Go Back
            </Link>
          </div>
        </div>
      )}
    </Fragment>
  );
};

Evaluation.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getProfileById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileById, getCurrentProfile, deleteEvaluation })(Evaluation);