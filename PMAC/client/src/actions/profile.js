import api from '../utils/api';
import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from './types';
import setAuthToken from '../utils/setAuthToken';

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('api/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//create or upadate profile

export const createProfile =
  (formData, edit = false) =>
  async (dispatch) => {

    const config ={
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify(formData);
    try {
        const res = await axios.post('api/profile', body, config);

      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
      
      dispatch(
        setAlert(edit ? 'Profile Updated':'Profile Created', 'success')
      );

      
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        console.log("hi");
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };


// Add Experience
export const addExperience = (formData, exp) => async (dispatch) => {
  let experience = exp;
  try {
    const res = await axios.put(`http://localhost:5001/api/profile/${experience}`, formData);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Experience Added', 'success'));
    return res.data;
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete experience
export const deleteExperience = (id, exp) => async (dispatch) => {
  try {
    let experience = exp;
    const res = await axios.delete(`api/profile/${experience}/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Work Experience Removed', 'success'));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

