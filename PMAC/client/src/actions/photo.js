import axios from 'axios';
import { setAlert } from './alert';

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
        
        const res = await axios.post('http://localhost:5001/api/photo', formData, config);

      

      
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        console.log("hi");
      }

      
    }
  };
