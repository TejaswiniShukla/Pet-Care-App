import React,{useEffect} from 'react'
import { Nav } from './Nav'
import './Display.css'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { DeleteBlogs, loaduser,Updatepets } from '../Store/Actions/Action'
import Update from './Update'



export const Display = () => {
  
  const dispatch=useDispatch()
  const {users,loading,errors,}=useSelector(state=>state.users)
   
 

  const newusernamedata= JSON.parse(localStorage.getItem('Logged')) || []
 
 
  const newdata=users.filter((e)=>{
    
    return e.username === newusernamedata[0].username
  })
 
  

  useEffect(() => {
    if (errors) {
        console.log(errors);
        alert('Something Went Wrong')
    }
}, [errors])

 const delpet=(i)=>{
    
  const dataofusername=JSON.parse(localStorage.getItem('Logged') || [])
  const alldata=JSON.parse(localStorage.getItem('Users') || [])
     const newfiltereddata=alldata.filter(e=>{
      return e.username === dataofusername[0].username
     })
      const index=alldata.indexOf(newfiltereddata[0]);
      alldata[index].allposts.splice(i,1)
      localStorage.setItem('Users',JSON.stringify(alldata))
      dispatch(loaduser())
 }
 const update=(e,i)=>{
     dispatch(Updatepets(e,i))
 }
  

  return (

    <div className='maindisplay'>
         
        
     <Nav/>
   
     <div className='postdiv'>
     <h2>Welcome to the '{newusernamedata[0].username.toUpperCase()}'  Page ✌️</h2>
     <hr/>

     <div className='make'>
     {loading?'Wait...Something Coming UP........':newdata.length>0? newdata[0].allposts.map((e,i)=>{
                     
                     return  <div key={i} className="card">
                     <img src={e.animalimg} className="card-img-top" alt="..."/>
                     <div className="card-body">
                       <h5 className="card-title">{e.animalname}</h5>
                       <p className="card-text">AnimalBreed={e.animalBreed} L</p>
                       <p className="card-text">Animal-Health={e.animalHealth}</p>
                       <p className="card-text">AnimalMilking={e.animalMilking} L</p>
                       <p className="card-text">AnimalWeight={e.animalWeight}-kg</p>
                       <div className='undermake'>
                       <i onClick={()=>delpet(i)} className="ri-delete-bin-2-fill"></i>
                       <Link to={'/update'}><p className='icons' onClick={()=>update(e,i)}>📝</p></Link>
                      </div>
                     </div>
                   </div>
                 }):'no POST YET'}
     </div>
     </div> 
    
   </div>
  )
}

{/* <div key={i} className='container'>
       <div className="card" style={{width: "20%"}}>
       <img src={e.animalimg} className="card-img-top" alt="..."/>
       <div className="card-body" >
        <h5 className="card-title">{e.animalname}</h5>
       
       </div>
       <ul className="list-group list-group-flush">
        <li className="list-group-item">AnimalMilking:{e.animalMilking} L</li>
        <li className="list-group-item">AnimalTemp{e.animaltemp}C</li>
        {/* <li className="list-group-item">A third item</li> */}
      {/* //  </ul> */}
       {/* <div className="card-body">
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
       </div> */}
    {/* //       </div>  */}
  //         </div> 
  // )
  //     }