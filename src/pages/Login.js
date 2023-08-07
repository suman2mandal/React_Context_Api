import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
import { useState } from 'react';
import { useNavigate } from 'react-router';

function Login() {
  const {setLogin} = useContext(LoginContext);
  const [name,setName] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
      <button onClick={()=>{setLogin(name);navigate('/Confirmation');}}>Login</button>
    </>
  )
}

export default Login