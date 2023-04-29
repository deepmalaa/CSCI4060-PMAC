import React, { useEffect, Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteEvaluation } from '../../actions/profile';
import Sidebar from '../../components/layout/Sidebar';
import SelectSearch from '../SelectSearch';
import { getProfileById } from '../actions/profile';
import { loadUser } from '../actions/auth';

const CandidateEvaluation = ({ profile: { profile, loading }, auth: { user }, deleteEvaluation, loadUser, getProfileById, getCurrentProfile, match }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    dispatch(getCurrentProfile());
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (match.params.userid) {
      getProfileById(match.params.userid);
    }
  }, [match.params.userid, getProfileById]);

  const onSelectOption = (option) => {
    setSelectedOption(option);
  };

  const onClearSearch = () => {
    setSearch('');
    setSelectedOption(null);
  };

  const onDeleteEvaluation = (id) => {
    deleteEvaluation(id);
  };

  let Candidate_Name = '';

  if (profile !== null && !loading) {
    Candidate_Name = `${profile.fname} ${profile.mname} ${profile.lname}`;
  }

  return (
    <section className="container">
      <Sidebar role="committe" />
      <h1 className="large text-primary">Evaluation for {item._id ? `CandidateEvaluation${item._id}` : Candidate_Name}</h1>
      <Fragment>
        <div className="my-2">
          <SelectSearch search={search} setSearch={setSearch} onSelectOption={onSelectOption} onClearSearch={onClearSearch} />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Evaluated By</th>
              <th>Date of Evaluation</th>
              <th>File</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {profile &&
              profile.evaluations.map((evaluation) => (
                <tr key={evaluation._id}>
                  <td>{evaluation.evaluator_name}</td>
                  <td>{new Date(evaluation.date).toLocaleDateString()}</td>
                  <td>
                    {evaluation.file ? (
                      <a href={`/api/evaluation/${evaluation.file}`} target="_blank" rel="noopener noreferrer">
                        View
                      </a>
                    ) : (
                      'N/A'
                    )}
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => onDeleteEvaluation(evaluation._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Link className="btn btn-light my-1" to="/EvaluationSelectUser">
          Go Back
        </Link>
      </Fragment>
    </section>
  );
};

CandidateEvaluation.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteEvaluation: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteEvaluation, loadUser, getProfileById })(CandidateEvaluation);