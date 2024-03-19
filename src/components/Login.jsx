
import React from 'react'
import Header from './Header'
import bg from '../images/bg.jpeg';
import { useState } from 'react';
const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
     <div>
     <Header/>
      </div>
      <div className='absolute inset-0'>
        <img src={bg} alt='bg-image' className='object-cover w-full h-full opacity-80'></img>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div>
      <form className='relative left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black bg-opacity-50'>
        <h1 className='p-10 text-3xl font-bold'>{isSignInForm ? "sign In" : "sign Up "}</h1>
        { !isSignInForm && <input type="text" placeholder='Full Name' className='w-full p-2 my-2 bg-gray-500'/>}
        <input type="text" placeholder='Email Address' className='w-full p-2 my-2 bg-gray-500'/>
        <input type="password" placeholder="password" className="w-full p-2 my-2 text-white bg-gray-500" />
        <button className='w-full p-4 my-2 bg-red-700 rounded-lg'>{isSignInForm ? "sign In" : "sign Up "}</button>
        <p className='my-4 font-semibold text-white cursor-pointer ' onClick={()=>{toggleSignInForm()}}>{isSignInForm ? "New to Netflix ? sign up now" : "Already registered ! Sign In now "}</p>
      </form>
      </div>
    </div>
  )
}

export default Login
