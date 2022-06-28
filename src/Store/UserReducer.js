import { 
    POST_REQUEST,
    USER_CREATE,
    USER_FAIL,
    USER_REQUEST,
    USER_SUCCESS,
    USER_LOGGED,
    USER_POST,
    USER_UPDATE
    
   
} from './Actions/ActionTypes';

const initState = {
users:[],
loading: false,
errors: null,
logged:null,
updatefor:null,
indexofupdated:null
};

const userReducer=(state=initState,{type,payload})=>{
    
     switch(type){
         case USER_REQUEST:
             return {
                 ...state,
                 loading:true
        }
        case USER_SUCCESS:
            return{
                ...state,
                loading:false,
                users:payload
            }
        case USER_FAIL:
           return{
               ...state,
               loading:false,
                errors:payload
           }
        case USER_CREATE:
            const d=[...state.users,payload]
            return{
                ...state,
                loading:false,
                users:d
            }
        case USER_LOGGED:
            return{
                ...state,
                loading:false,
                logged:{...payload}
            }
        
        case USER_POST:
          
            return{
                ...state,
                loading:false,
                users:[...state.users, payload]
              
                

                
             }
            case USER_UPDATE:
            
                return{
                    ...state,
                    loading:false,
                    updatefor:payload.petdetails,
                    indexofupdated:payload.i
                   
                        
        
                        
                     }
        // case USER_DELETE:
          
        //     return{
        //             ...state,
        //             loading:false,
                    
        //             users:[...state.users, payload]
                    
    
                    
        //     }
             
        default:
            return state;
     }
}
export default userReducer

// const userReducer = (state=initState, {type, payload}) => {
//     console.log(type,payload);
// switch (type) {
//     case USER_REQUEST:
//         return{
//             ...state,
//             loading:true,        
//         }
//     case USER_SUCCESS:
//         return {
//             ...state,
//             loading: false,
//             users:payload
//         }
//     case USER_FAIL:
//         return {
//             ...state,
//             loading: false,
//             errors: payload
//         }
//     case USER_CREATE: 
//         let c = {...state.users, payload};
//         return {
//             ...state,
//             loading: false,
//             users:c
//         }
    
        
    
//         // case POST_REQUEST:
//         //     return{
//         //         ...state,
//         //         loading:true,        
//         //     }
//         // case POST_SUCCESS:
            
//         //     return {
//         //         ...state,
//         //         loading: false,
//         //         posts: payload
//         //     }
//         // case POST_FAIL:
//         //     return {
//         //         ...state,
//         //         loading: false,
//         //         errors: payload
//         //     }
//         // case POST_CREATE: 
//         //     let b = [...state.posts, payload];
//         //     return {
//         //         ...state,
//         //         loading: false,
//         //         posts: b
//         //     }
//         // case POST_DELETE: 
//         //     return {
//         //         ...state,
//         //         loading: false,
//         //         posts:payload
//         //     }

        
    
  
    
//     default:
//         return state;
// }
// }

// export default userReducer
