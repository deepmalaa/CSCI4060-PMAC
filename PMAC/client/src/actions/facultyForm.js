import axios from 'axios';
import {setAlert} from './alert';
import {USER_LOADED,GET_F_FORM,CLEAR_F_FORM,F_FORM_ERROR} from './types';
import api from '../utils/api';

export const facultyForm = (formData) =>
async(dispatch) => {
    
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify(formData);

    try {
        const res = await axios.post('api/faculty', body, config);

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });

        dispatch(
            setAlert('Faculty Form Submitted', 'success')
        );


    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
            console.log("hi");
        }
    }
};



// Get current users faculty form
export const getFacultyForms = () => async (dispatch) => {

    dispatch({ type: CLEAR_F_FORM });
    try {
      const res = await axios.get('/api/faculty');
  
      dispatch({
        type: GET_F_FORM,
        payload: res.data
      });
      //console.log('Form data:', res.data);
      return res.data;

    } catch (err) {
      dispatch({
        type: F_FORM_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };