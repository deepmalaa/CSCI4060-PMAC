import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {Link, Navigate} from 'react-router-dom';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
import propTypes from 'prop-types';
import jwt from 'jwt-decode';



const Register = ({setAlert, register, isAuthenticated}) => {
    const [formData, setFormData] =useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        type: ''
    });

    const{name,email,password,password2, type} = formData;

    const onChange = e =>setFormData({...formData, [e.target.name]:e.target.value});

    const onSubmit = async (e) => {
        e.preventDefault();
        if(password !== password2){
           setAlert('Passwords do not match', 'danger');
        }
        else{
            register({ name, email, password, type });
        }
    }

    //redirect if loggedin
    if(isAuthenticated){
      const user = jwt(localStorage.token);
      console.log(user.role);
    
      if(user.user.role === "Committee")
        return <Navigate to ="/dashboardCommittee" />


      return <Navigate to ="/ApplicationForm" />
      }

    

  return (
    <Fragment>
        <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value ={name} onChange={e=> onChange(e)} required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value ={email} onChange={e=> onChange(e)} required />
          
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            minLength={8}
            value ={password} onChange={e=> onChange(e)} 
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            required
            minLength={8}
            value ={password2} onChange={e=> onChange(e)} 
          />
        </div >
        <div className="form-group">
        <select name="type" placeholder="Choose a role" required onChange={e=> onChange(e)}>
          <option value="">Select role</option>
    <option value="Student">Student</option>

    <option value="Committee">Committee Member</option>
    </select>
    </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to ="/login">Sign In</Link>
      </p>
    </Fragment>
  )
};
Register.propTypes = {
    setAlert: propTypes.func.isRequired,
    register:propTypes.func.isRequired,
    isAuthenticated: propTypes.bool
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
export default connect(mapStateToProps, { setAlert, register })(Register);
