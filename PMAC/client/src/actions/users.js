import axios from 'axios';
import { setAlert } from './alert';
import {CLEAR_SCHEMAS,GET_SCHEMAS,SCHEMA_ERROR } from './types';

  // Get current users schema
  export const getUserData= () => async (dispatch) => {

    dispatch({ type: CLEAR_SCHEMAS });
    try {
      const res = await axios.get('/api/users');
  
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
