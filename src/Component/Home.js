import React from 'react'
import './Home.css'
import { Link,useNavigate } from 'react-router-dom'
import { loggeduser } from '../Store/Actions/Action'
import { useDispatch } from 'react-redux'

const Home = () => {
     const navigate=useNavigate()
     const dispatch=useDispatch()

     const submithandler=(e)=>{
          e.preventDefault()
         const loginDetails={
             username:e.target.username.value,
             password:e.target.password.value
         }
        const usersdata = JSON.parse(localStorage.getItem('Users')) || [];
        const usernamedata=usersdata.filter((e,i)=>{
             return e.username === loginDetails.username
        })

        if(usernamedata.length>0){
          localStorage.setItem('Logged',JSON.stringify(usernamedata))
        }

        
        const passworddata=usersdata.filter((e,i)=>{
          return e.password === loginDetails.password
        })

        if(usernamedata.length>0 && passworddata.length>0){
             navigate('/Display')
             dispatch(loggeduser(usernamedata))
        }else{
          alert('username not registered')
        }
          

         

     }
  return (
    <div className='mainhome'> 
        <div className='mainform'> 
         <h2>Login..</h2>

         <form onSubmit={submithandler}>
              <input
               type='text'
               placeholder='Username..'
               name='username'
               autoComplete='off'
             /><br></br>
               <input
               type='password'
               placeholder='PassWord..'
               name='password'
               autoComplete='off'
             /><br></br>
              {/* <button>Submit</button> */}
             <button className='btn'>Submit</button><br/><br></br>
              <p>Don't have an account ?</p>
             <Link to={'/Register'} > Register yourself</Link>
         </form>
       </div>
    </div>
  )
}

export default Home