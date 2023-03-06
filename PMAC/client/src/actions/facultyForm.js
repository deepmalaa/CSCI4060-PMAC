import axios from 'axios';
import {setAlert} from './alert';
import {GET_PROFILE} from './types';

export const facultyForm = (formData) =>
async(dispatch) => {
    
    const config = {
        headers:{
            'Content-Type': 'faculty/json'
        }
    }
    const body = JSON.stringify(formData);

    try {
        const res = await axios.post('api/faculty', body, config);

        dispatch({
            type: GET_PROFILE,
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
} 