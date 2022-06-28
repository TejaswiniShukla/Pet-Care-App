import React from 'react'
import { Nav } from './Nav'
import './Add.css'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../Store/Actions/Action'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export const Add = () => {
 
  const navigate =useNavigate()
    const dispatch=useDispatch()
    
    const submitHandler=(e)=>{
        e.preventDefault()
        const post={
            animalname:e.target.animalname.value,
            animalimg:e.target.animalimg.value,
            animalHealth:e.target.animalHealth.value,
            animalMilking:e.target.animalMilking.value,
            animalWeight:e.target.animalWeight.value,
            
        }
         dispatch(createPost(post))
         navigate('/display')
    }
  return (
    <div className='addmain'>
     
      <div className='addform'>
          <h6>Add your Pet🐕</h6>
          <div className='add1'>
              <div className='add2'>
              <form onSubmit={submitHandler}>
<input 
 type='text'
 name='animalname'
 placeholder='animal-name'
 
 autoComplete='off'
/><br></br>
<input 
 type='src'
 name='animalimg'
 placeholder='animal-url'  
 autoComplete='off'
/>

<input 
 type='text'
 name='animalHealth'
 placeholder='Health issue'
 
 autoComplete='off'
/>
<div className='addinps'>
<input 
 type='Number'
 name='animalMilking'
 placeholder='Daily-Milking'
 
 autoComplete='off'
/><br></br>
<input 
 type='number'
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
            <div className='add3'>
            </div>
          </div>
      
       </div>
    </div>
  )
}


