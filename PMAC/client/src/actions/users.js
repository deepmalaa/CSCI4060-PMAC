import axios from 'axios';
import { setAlert } from './alert';
import { } from './types';

  // Get current users schema
  export const getUserData= () => async (dispatch) => {

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
