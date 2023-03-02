import React, {Fragment, useState} from 'react';
import axios from 'axios';


const Form = () => {

    const [formData, setFormData] = useState({
        name: ''
    });

    const{name} = formData;

    const onChange = e => setFormData({ ...formData, name: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        const newUser = {
            name
        }
        try {
            const config = {
                headers:{
                    'Content-Type': 'application/json'
                }
                
            }
            const body = JSON.stringify(newUser);
            //const res = await axios.post('http://localhost:5002/api/users', body, config);
            const res = await axios.post('http://18.209.133.89:5002/api/users', body, config);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    }


  return (
    <form onSubmit={e => onSubmit(e)}>
            <label>
                Enter your name: <input type="text" id="name" name="name" value={name} onChange = {e => onChange(e)}/>
            </label>
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
        </form>
  )
}

export default Form
