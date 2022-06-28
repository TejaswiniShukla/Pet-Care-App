import { 
    USER_CREATE,
    USER_FAIL,
    USER_REQUEST,
    USER_SUCCESS,
    POST_FAIL, 
    POST_REQUEST, 
    POST_SUCCESS,
    POST_CREATE,
    POST_DELETE
} from '../Actions/ActionTypes';

const initState = {
posts: [],
users:[],
loading: false,
errors: null,
};

const postReducer = (state=initState, {type, payload}) => {
   
switch (type) {
    case USER_REQUEST:
        return{
            ...state,
            loading:true,        
        }
    case USER_SUCCESS:
        
        return {
            ...state,
            loading: false,
            users: payload
        }
    case USER_FAIL:
        return {
            ...state,
            loading: false,
            errors: payload
        }
    case USER_CREATE: 
        let c = [...state.users, payload];
        return {
            ...state,
            loading: false,
            users:c
        }

        
    
    case POST_REQUEST:
        return{
            ...state,
            loading:true,        
        }
    case POST_SUCCESS:
        
        return {
            ...state,
            loading: false,
            posts: payload
        }
    case POST_FAIL:
        return {
            ...state,
            loading: false,
            errors: payload
        }
    case POST_CREATE: 
        let b = [...state.posts, payload];
        return {
            ...state,
            loading: false,
            posts: b
        }
    case POST_DELETE: 
        return {
            ...state,
            loading: false,
            posts:payload
        }
    default:
        return state;
}
}

export default postReducer
