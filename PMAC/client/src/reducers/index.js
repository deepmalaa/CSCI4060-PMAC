import { combineReducers } from "redux";
import alert from './alert';
import auth from './auth';
import profile from './profile';
import facultyForm from "./facultyForm";


export default combineReducers(
    {
        alert,
        auth,
        profile,
        facultyForm
    }
);