import React, {Fragment, useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changePassword } from '../../actions/auth';
import jwt from 'jwt-decode';
import Sidebar from '../layout/Sidebar';


const ChangePassword = ({changePassword, auth: { user }}) => {
    const [formData, setFormData] =useState({

        currentPassword: '',
        newPassword: '',

    });

    const{currentPassword,newPassword} = formData;

    const onChange = e =>setFormData({...formData, [e.target.name]:e.target.value});

    const onSubmit = e => {
        e.preventDefault();
       
        changePassword(currentPassword, newPassword, user._id);
        
    }
    let role;

    if(user){
      console.log(user.type);
      if(user.type === "Student")
        role = "student"
      if(user.type === "Committee")
        role ="committe"
        if(user.type === "admin")
        role ="admin"
    }

    //redirect if loggedin
   

  return (
    <Fragment>
        
        <Sidebar role = {role} />
        <h1 className="large text-primary">Change your password</h1>
      
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="password" placeholder="Current Password" name="currentPassword" value ={currentPassword} onChange={e=> onChange(e)} required />
          
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="New Password"
            name="newPassword"
            minLength="6"
            value ={newPassword} onChange={e=> onChange(e)} required
          />
        </div>
        
        <input type="submit" className="btn btn-primary" value="Change Password" />
      </form>
      <p className="my-1">
      </p>
    </Fragment>
  )
};

ChangePassword.propTypes = {
  changePassword: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {changePassword})(ChangePassword);
