import React from 'react'
import './Update.css'
import { useSelector,useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { loaduser } from '../Store/Actions/Action'
const Update = () => {

    const {updatefor,indexofupdated}=useSelector(state=>state.users)
    const dispatch=useDispatch()
    const navigate=useNavigate()
   
   
    const submitHandler=(e)=>{
        e.preventDefault()
        const postupdateddata={
            animalname:e.target.animalname.value,
            animalimg:e.target.animalimg.value,
          
            animalHealth:e.target.animalHealth.value,
            animalMilking:e.target.animalMilking.value,
            animalWeight:e.target.animalWeight.value,
        }
        const loggeduserdata = JSON.parse(localStorage.getItem('Logged')) || [];
   
        const data = JSON.parse(localStorage.getItem('Users')) || [];
        const filtereddata=data.filter((e)=>{
            return e.username === loggeduserdata[0].username
        })
        const index=data.indexOf(filtereddata[0]) 
        data[index ].allposts.splice(indexofupdated,1)
        data[index].allposts.splice(indexofupdated,0,postupdateddata)
        localStorage.setItem('Users',JSON.stringify(data))
        dispatch(loaduser())
        navigate('/display')
    }
  return (
      <>
    
      <div className='mainupdate'>
    
        <div className='rect'>
        <form onSubmit={submitHandler}>
            <h2>Update Your Pet Details!!</h2>
            <input 
             type='text'
             name='animalname'
             defaultValue={updatefor.animalname}
             placeholder='animal-name'     
             autoComplete='off'

            /><br></br>
            <input 
             type='src'
             name='animalimg'
             defaultValue={updatefor.animalimg}
             placeholder='animal-url'  
             autoComplete='off'
            />
           <input 
             type='text'
             name='animalHealth'
             defaultValue={updatefor.animalHealth}
             placeholder='Health issue'
             
             autoComplete='off'
            />
            <div className='addinps'>
            <input 
             type='Number'
             defaultValue={updatefor.animalMilking}
             name='animalMilking'
             placeholder='Daily-Milking'
             
             autoComplete='off'
            /><br></br>
            <input 
             type='number'
             defaultValue={updatefor.animalWeight}
             name='animalWeight'
             placeholder='Weight'  
             autoComplete='off'
            />
            </div>
            <br>
            </br>
            <button className='btnadd'>submit</button>
        </form> 
        </div>
    </div>
    </>
  )
}

export default Update