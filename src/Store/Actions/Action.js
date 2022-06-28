
import { useSelector } from 'react-redux';
import {
    USER_CREATE,
    USER_FAIL,
    USER_REQUEST,
    USER_SUCCESS,
    USER_LOGGED,
    USER_POST,
    USER_UPDATE


} from './ActionTypes';




export const loaduser=()=>(dispatch)=>{
    try{
        dispatch({
            type:USER_REQUEST
        })
        setTimeout(() => {
            const data = JSON.parse(localStorage.getItem('Users')) || [];
            dispatch({
                type: USER_SUCCESS,
                payload: data
            })
        }, 2000);
    }catch(err){
        dispatch({
            type: USER_FAIL,
            payload: err
        })
    }
}

export const createuser = (userd) => (dispatch, getState) => {
    try {
     
        let NewUser = [...getState().users.users,userd];
        
        localStorage.setItem("Users", JSON.stringify(NewUser));

        dispatch({
            type: USER_CREATE,
            payload:userd
        })


    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error
        })
    }
}  


export const loggeduser = (user) => (dispatch, getState) => {
   
  
    try {

        dispatch({
            type: USER_LOGGED,
            payload:user[0]
        })


    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error
        })
    }
}  

export const Updatepets = (petdetails,i) => (dispatch, getState) => {
    
  
    try {

        dispatch({
            type: USER_UPDATE,
            payload:{petdetails,i}
        })


    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error
        })
    }
}  


export const createPost = (post) => (dispatch, getState) => {
   
    try {
        
       const loggedusername=JSON.parse(localStorage.getItem('Logged') || [])
         
        const getdata=JSON.parse(localStorage.getItem('Users') || [])
        
        const loggedinuser=getdata.filter((e)=>{
            return e.username === loggedusername[0].username
        })
        
        const i=getdata.indexOf(loggedinuser[0])
     
        getdata[i].allposts.push(post)
        
        localStorage.setItem('Users',JSON.stringify(getdata))
        
      
         
        dispatch({
            type: USER_SUCCESS,
            payload: getdata
        })



    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error
        })
    }
}   
// export const DeleteBlogs = (ind) => (dispatch,getState) => {
   
//     try {
//         dispatch({ type:USER_REQUEST })
        
        
         
         
     
        // localStorage.setItem('Users',JSON.stringify(alldata))
//         dispatch({type:USER_DELETE,payload:alldata})

//     } catch (error) {
//         dispatch({
//             type: USER_FAIL,
//             payload: error
//         })
//     }
// }
// export const DeletePost = (i) => (dispatch,getState) => {
//     try {
//         dispatch({ type:POST_REQUEST })
//         const data=[...getState().blogs.blogs]
//         const deleteddata=data.filter((e,ind)=>{
//                    return ind!==i
//         })
     
//        localStorage.setItem('Blogs',JSON.stringify(deleteddata))
//         dispatch({type:POST_DELETE,payload:deleteddata})

//     } catch (error) {
//         dispatch({
//             type: POST_FAIL,
//             payload: error
//         })
//     }
// }
