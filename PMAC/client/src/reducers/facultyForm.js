import {
    GET_F_FORM,
    CLEAR_F_FORM,
    F_FORM_ERROR
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    facultyForms: [],
    loading: true,
    error: {},
    isAuthenticated: null,

};

function facultyFormReducer(state=initialState,action){
    const{type,payload} = action;

    switch (type){
        case GET_F_FORM:
            return{
                ...state,
                loading: false,
                facultyForms: payload
            }
            case F_FORM_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                facultyForms: null,
                isAuthenticated: false,
            };

        case CLEAR_F_FORM:
            return {
                ...state,
                facultyForms: null,
            };
        default:
            return state;
    }
};
export default facultyFormReducer;