import React,{useEffect} from 'react'
import Home from './Component/Home'
import { Display } from './Component/Display'

import { Add } from './Component/Add'
import './App.css'
import { Register } from './Component/Register'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loaduser } from './Store/Actions/Action'
import Update from './Component/Update'
const App = () => {

  const dispatch=useDispatch()
  useEffect(() => {

    dispatch(loaduser())
   
  
  }, [dispatch])
  
  return (
    <>
    <div className='app'>  
       
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/display' element={<Display/>} />
          <Route path='/Add' element={<Add/>}/>
          <Route path='/Logout' element={<Home/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
      
        
    </div>
    </>
  )
}

export default App