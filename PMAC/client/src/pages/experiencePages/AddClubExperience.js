import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import Sidebar from '../../components/layout/Sidebar';

const AddExperience = ({ addExperience }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    years: '',
    description: ''
  });

  const { company, title, years, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="container">
      <Sidebar role="student" />
      <h1 className="large text-primary">Add Memberships/ Academic Clubs Experience</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Indicate appropiate leadership position (if any) in description field
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addExperience(formData, "club_experience").then(() => navigate('/clubExperience'));
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Club Name"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Role"
            name="company"
            value={company}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Time Involved"
            name="years"
            value={years}
            onChange={onChange}
          />
        </div>
        
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Description"
            value={description}
            onChange={onChange}
          />
        </div>
        <Link className="btn btn-light my-1" to="/clubExperience">
          Go Back
        </Link>
        <input type="submit" className="btn btn-primary my-1" />
        
      </form>
    </section>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(AddExperience);