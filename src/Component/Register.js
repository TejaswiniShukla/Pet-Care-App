import React from 'react'
import "./Register.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createuser } from '../Store/Actions/Action'



export const Register = () => {
  const dispatch=useDispatch()
    const navigate=useNavigate()

    

    const submithandler=(e)=>{
        e.preventDefault()


        const userd={
          username:e.target.username.value,
          password:e.target.password.value,
          allposts:[]
        }
       

        const usersdata = JSON.parse(localStorage.getItem('Users')) || [];
        const filterddata =usersdata.filter((e,i)=>{

                 return  e.username === userd.username
        })
       
      
         if(filterddata.length>0){
            alert('username already registerd')
        }else{
         
          dispatch(createuser(userd))
          navigate('/')     
        }

   }
  return (
    <div className='mainhome'> 
        <div className='mainform'> 
         <h2>Rgister yourself</h2>

         <form onSubmit={submithandler}>
             <input
               type='text'
               placeholder='Name..'
               name='name'
               autoComplete='off'
             /><br></br>
              <input
               type='text'
               placeholder='username..'
               name='username'
               autoComplete='off'
             /><br></br>
               <input
               type='password'
               placeholder='PassWord..'
               name='password'
               autoComplete='off'
             /><br></br>
             <button className='regsbtn'>Submit</button>
             <br></br>
             <p>Already have an accont?</p><br></br>
             <Link to={'/'} >Login</Link>
         </form>
       </div>
    </div>
  
  )
}
