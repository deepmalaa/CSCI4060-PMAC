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
//import OpenEvaluation from '../components/layout/OpenEvaluation';

const Evaluation = ({
  getProfileById,
  getCurrentProfile,
  auth: { user },
  profile: { profile }
}) => {
  const navigate = useNavigate();
  const { userid } = useParams();
  const dispatch = useDispatch(); // Define dispatch using useDispatch

  useEffect(() => {
    getCurrentProfile();
    getProfileById(userid);
  }, [getCurrentProfile, getProfileById, userid]);

  const [item, setItem] = useState({ _id: null }); // Define item using useState

  let evaluation;
  
  if (profile && profile.interview_evaluation) {
    evaluation = profile.interview_evaluation.map((exp) => (
      <tr key={exp._id}>
        <td>{exp.name_evaluator}</td>
        <td>{exp.application}</td>
        <Link to={{ pathname: `/OpenEvaluation/${exp._id}`, state: { evaluation: exp.interview_evaluation } }}>
  View Evaluation
</Link>
        <td>{exp.file}</td><td>
          <button
            onClick={() => dispatch(deleteEvaluation(userid, exp._id))}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  }
  if (profile) {
    return (
      <Fragment>
        <h2 className="my-2">{profile.fname} {profile.lname}'s Evaluations</h2>
        <Sidebar role="committe" />
        <div className="table">
          <thead>
            <tr>
              <th>Evaluator</th>
              <th>Application Type</th>
              <th>Written Evaluation</th>
              <th>File Evaluation</th>
            </tr>
          </thead>
          <tbody>{evaluation}</tbody>
        </div>

        <br />
        <Link
          to={`/InterviewEvaluation/${profile._id}`}
          className="btn btn-primary"
        >
          <i className="fab fa-black-tie text-primary" /> Add Evaluation
        </Link>

        <div className="buttons">
          <Link className="btn btn-light my-1" to="/EvaluationSelectUser">
            Go Back
          </Link>
        </div>
      </Fragment>
    );
  }
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