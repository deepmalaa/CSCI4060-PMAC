import React, {useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
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

    const dispatch = useDispatch();
    let experiences;
    
    if (profile && profile.club_experience){

    experiences = profile.work_experience.map((exp) => (
      
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
              onClick={() => dispatch(deleteExperience("work_experience", exp._id))}
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
      
      <h2 className="my-2">Work Experience</h2>
      <Sidebar role = "student"/>
      <div className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th >Title</th>
            <th >Time Involved</th>
            <th >Description</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </div>

      <br />

      <Link to='/addWorkExperience' className='btn btn-primary'>
        <i className='fab fa-black-tie text-primary' /> Add Work Experience
      </Link>
      

        <div className="buttons">
        <Link className="btn btn-light my-1" to="/clubExperience">
          Go Back
        </Link> 
            <Link to="/fieldExperience" className="btn btn-primary">Next Page</Link>
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