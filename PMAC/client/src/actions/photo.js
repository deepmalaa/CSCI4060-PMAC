import axios from 'axios';
import { setAlert,GET_PHOTO,CLEAR_PHOTO,PHOTO_ERROR } from './alert';

export const photo =
  (formData) =>
  async (dispatch) => {
    console.log("hi");

    const config ={
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    }

    const body = JSON.stringify(formData);
    try {
        
        const res = await axios.post('/api/photo', formData, config);
   
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        console.log("hi");
      }

      
    }
  };



  // Get current user photo
export const getWaiver = () => async (dispatch) => {

  dispatch({ type: CLEAR_PHOTO });
  try {
    const res = await axios.get('/api/apprelease');

    dispatch({
      type: GET_PHOTO,
      
      payload: res.data
    });
    //console.log('Waiver data:', res.data);
    return res.data;
    
  } catch (err) {
    dispatch({
      type: PHOTO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};