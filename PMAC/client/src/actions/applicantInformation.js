import axios from 'axios';
import { setAlert } from './alert';
import { USER_LOADED } from './types';



export const applicantInformation = (formData) =>
async (dispatch) => {

    const config ={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify(formData);
    try {
        // May have to change apprelease
        const res = await axios.post('api/appInfo', body, config);

      dispatch({
        type: USER_LOADED,
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
