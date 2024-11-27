import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [data,setData]=useState({})
  // const navigate=useNavigate()
  const login=()=>{
    axios.post('http://localhost:5000/industries/login',data).then(r=>
      
      window.location='http://localhost:3000/industry'
      // navigate('/')
    ).catch(err=>console.log(err))
  }
  const handleChange=(e)=>{
    const {value,name}=e.target
    setData((prev)=>{return{
      ...prev,
      [name]:value
    }})
  }
  return (
    <div>
     <input type="text"
     onChange={(e)=>handleChange(e)}
     />
     <input type="text" 
     onChange={(e)=>handleChange(e)}
     />
     <button 
     onClick={()=>login()}
     >login</button>

    </div>
  )
}

export default Login
