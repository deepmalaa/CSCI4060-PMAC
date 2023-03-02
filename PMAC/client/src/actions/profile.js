import api from '../utils/api';
import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR } from './types';
import setAuthToken from '../utils/setAuthToken';

export const profile =
  (formData) =>
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
        setAlert('Profile Created', 'success')
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
