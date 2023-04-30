import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, GET_WAIVERS, CLEAR_WIAVER, WAIVER_ERROR} from './types';


export const applicantRelease = (formData) =>
async (dispatch) => {

    const config ={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify(formData);
    try {
        const res = await axios.post('/sapi/apprelease', body, config);
        
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
      
      dispatch(
        setAlert('Applicant Infomation Release Submitted', 'success')
      );

      
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        console.log("hi");
      }
    }
}


// Get current users waiver
export const getWaiver = () => async (dispatch) => {

  dispatch({ type: CLEAR_WIAVER });
  try {
    const res = await axios.get('/api/apprelease');

    dispatch({
      type: GET_WAIVERS,
      
      payload: res.data
    });
    //console.log('Waiver data:', res.data);
    return res.data;
    
  } catch (err) {
    dispatch({
      type: WAIVER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};