import React, { useState, useEffect } from 'react'
import {getAuth, signOut} from "firebase/auth"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {

  // state
  const [user,setUser] = useState()
  const navigate = useNavigate()

  // clc
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user')))
  },[])

  // logout
  const handleLogout = ()=>{
    const auth = getAuth()
    signOut(auth)
    .then(result =>{
      localStorage.clear()
      navigate("/")
    })
    .catch((err)=>{
      console.error(err)
    })
  }

  return (
    <main className='w-screen min-h-screen flex flex-col bg-gradient-to-tr from-red-800 to-red-500 max-w-[500px] mx-auto p-10'>
        <div className='w-full bg-white p-6 shadow-lg flex flex-col gap-4 rounded-lg items-center'>
            <h1 className='text-4xl text-red-500 text-center '>Welcome</h1>
            <img src={user?.photoURL} alt="" className='w-[80px] h-[80px] rounded-full object-cover' />
            <p>{user?.displayName}</p>
            <h2>{user?.email}</h2>
            <button className='h-10 w-20 bg-black text-white rounded-lg' onClick={handleLogout} > Log Out</button>
        </div>

    </main>
  )
}
