import React, {useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteExperience } from '../../actions/profile';
import Sidebar from '../../components/layout/Sidebar';


const Experience = ({
    getCurrentProfile,
    auth: { user },
    profile: { profile }
  }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);
    if (!profile) getCurrentProfile();

    let experiences;
    
    if (profile.club_experience){
    experiences = profile.lab_experience.map((exp) => (
        <tr key={exp._id}>
          <td>{exp.company}</td>
          <td >{exp.title}</td>
          <td>
            {exp.years}
          </td>
          <td>
            {exp.description}
          </td>
          <td>
            <button
              onClick={() => deleteExperience(exp._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      ));
    }
    
  return (
    <Fragment>
      <h2 className="my-2">Laboratory Research</h2>
      <Sidebar />
      <div className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th >Title</th>
            <th >Years</th>
            <th >Description</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </div>


      <br />

      <Link to='/AddLabExperience' className='btn btn-primary'>
        <i className='fab fa-black-tie text-primary' /> Add Laboratory Research
      </Link>
      

        <div className="buttons">
        <Link className="btn btn-light my-1" to="/honorsExperience">
          Go Back
        </Link> 
            <Link to="/volunteerExperience" className="btn btn-primary">Next Page</Link>
            </div>
     
    </Fragment>

    
    
  );
};

Experience.propTypes = {
getCurrentProfile: PropTypes.func.isRequired,
  deleteExperience: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
  });

export default connect(mapStateToProps, {getCurrentProfile, deleteExperience })(Experience);