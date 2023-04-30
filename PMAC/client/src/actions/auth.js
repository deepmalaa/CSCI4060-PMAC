import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import {setAlert} from './alert';
import api from '../utils/api';
import{
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    CLEAR_PROFILE,
    PASSWORD_UPDATE
} from './types';


//Load User
export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
}

//Register USer
export const register = (formData) => async dispatch =>{

    try {
        const res = await api.post('/users', formData);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (err) {
        const errors =err.response.data.errors

        if(errors){
          errors.forEach(error => {dispatch(setAlert(error.msg, 'danger'))});
            
        }

        dispatch ({
            type: REGISTER_FAIL
        })
    }
};

//Login USer
export const login = (email, password) => async dispatch =>{
    const config ={
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({email, password});
    try {
        const res = await axios.post('/api/auth', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        
        const errors =err.response.data.errors;
        console.log(typeof(errors));

        if(errors){
             errors.forEach(error => {dispatch(setAlert(error.msg, 'danger'))});
            
         }

        dispatch ({
            type: LOGIN_FAIL
        })
    }
};

//Logout 
export const logout = () => dispatch => {
    dispatch({type: CLEAR_PROFILE});
    dispatch({type: LOGOUT});
};


//Change password
export const changePassword = (currentPassword, newPassword, id) => async dispatch =>{
    const config ={
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({currentPassword, newPassword});
    try {
        const res = await axios.patch(`/api/users/updatepassword/${id}`, body, config);
        dispatch({
            type: PASSWORD_UPDATE,
            payload: res.data
        });
        dispatch(setAlert('Password Changed', 'success'));

        dispatch(loadUser());
    } catch (err) {
        
        const errors =err.response.data.errors;
        console.log(typeof(errors));

        if(errors){
             errors.forEach(error => {dispatch(setAlert(error.msg, 'danger'))});
            
         }

        dispatch ({
            type: LOGIN_FAIL
        })
    }
};