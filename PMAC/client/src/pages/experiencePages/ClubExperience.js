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
    console.log(profile);
    console.log(getCurrentProfile);
    let experiences;
    
    if (profile &&profile.club_experience){

    
    experiences = profile.club_experience.map((exp) => (
      
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
              onClick={() => deleteExperience(exp._id, exp)}
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
      <h2 className="my-2">Academic Club Memberships</h2>
      <Sidebar role = "student"/>
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
      <Link to='/AddClubExperience' className='btn btn-primary'>
        <i className='fab fa-black-tie text-primary' /> Add Club Memberships
      </Link>
      
        <div className="buttons">
        <Link className="btn btn-light my-1" to="/applicationForm">
          Go Back
        </Link> 
            <Link to="/workExperience" className="btn btn-primary">Next Page</Link>
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