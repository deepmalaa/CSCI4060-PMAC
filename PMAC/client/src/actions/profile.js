import api from '../utils/api';
import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, GET_PROFILES, PROFILE_ERROR, UPDATE_PROFILE, CLEAR_PROFILE } from './types';
import setAuthToken from '../utils/setAuthToken';


// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile/me');

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
        const res = await axios.post('/api/profile', body, config);

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

  export const saveProfile =
  (formData, edit = false) =>
  async (dispatch) => {

    const config ={
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify(formData);
    try {
        const res = await axios.post('/api/profile/save', body, config);

      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
   
      
      dispatch(
        setAlert(edit ? 'Profile Updated':'Profile Saved', 'success')
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
    const res = await axios.put(`/api/profile/${experience}`, formData);

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
export const deleteExperience = (exp, id) => async (dispatch) => {
  try {

    console.log("I am a delete action")
    let experience = exp;
    const res = await axios.delete(`/api/profile/${experience}/${id}`);

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

// Get all user profiles
export const getAllProfile = () => async (dispatch) => {

  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get('/api/profile');

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get search profile
export const getSearchProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile/search');

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get profile by ID
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profile/user/${userId}`);

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



// Add evaluation
export const addEvaluation = (formData, exp) => async (dispatch) => {
  let evaluation = exp;
  try {
    const res = await axios.put(`/api/profile/add/interview_evaluation/${evaluation}`, formData);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Evaluation Added', 'success'));
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

// Delete evaluation
export const deleteEvaluation = (userid, id) => async (dispatch) => {
  try {

    console.log("I am a delete action")
    const res = await axios.delete(`/api/profile/delete/interview_evaluation/${id}/${userid}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Evaluation Removed', 'success'));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add status
export const updateStatus = (stat) => async (dispatch) => {
  
  try {
    const res = await axios.put(`/api/profile/status/${stat}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    
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

//'/schoolStatus/:id',

// Set sttus
export const updateSchoolStatus = (id, formData) => async (dispatch) => {
  console.log("ACITON");
  try {
    const res = await axios.put(`/api/profile/schoolStatus/${id}`, formData);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    
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
