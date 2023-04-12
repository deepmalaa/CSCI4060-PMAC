import axios from 'axios';
import { setAlert } from './alert';
import {POST_SCHEDULE, UPDATE_SCHEMA,SCHEMA_ERROR,GET_SCHEMAS,CLEAR_SCHEMAS } from './types';


export const postSchedule = (formData) =>
async (dispatch) => {

    const config ={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify(formData);
    try {
        const res = await axios.post('api/calendar', body, config);
        
      dispatch({
        type: POST_SCHEDULE,
        payload: res.data
      });
      
      dispatch(
        setAlert('Applicant Infomation Release Submitted', 'success')
      );

      
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        console.log("postSchedule not working");
      }
    }
}


export const deleteSchema = (id) => async (dispatch) => {
    try {
      
      const res = await axios.delete(`api/calendar/${id}`);
  
      dispatch({
        type: UPDATE_SCHEMA,
        payload: res.data
      });
  
      dispatch(setAlert('Schema Event Removed', 'success'));
    } catch (err) {
      dispatch({
        type: SCHEMA_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };


  // Get current users schema
export const getSchemas = () => async (dispatch) => {

    dispatch({ type: CLEAR_SCHEMAS });
    try {
      const res = await axios.get('/api/calendar');
  
      dispatch({
        type: GET_SCHEMAS,
        
        payload: res.data
      });
      //console.log('Schema data:', res.data);
      return res.data;
      
    } catch (err) {
      dispatch({
        type: SCHEMA_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
