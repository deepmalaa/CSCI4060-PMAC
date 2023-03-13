import{
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    UPDATE_PROFILE,
} from '../actions/types';

const initialState ={
    token: localStorage.getItem('token'),
    profile: null,
    loading: true,
    error: {},
    isAuthenticated: null,

};

function profileReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type){
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return{
                ...state,
                loading:false,
                profile:payload,
                isAuthenticated: true,
            };

        case PROFILE_ERROR:
            return{
                ...state,
                error: payload,
                loading: false,
                profile: null,
                isAuthenticated: false,
            };

            case CLEAR_PROFILE:
                return {
                  ...state,
                  profile: null,
                };
        default:
            return state;
    }
};
export default profileReducer;