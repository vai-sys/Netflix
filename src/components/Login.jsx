


// import React, { useState, useRef } from 'react';

// import Header from './Header';
// import bg from '../images/bg.jpeg';
// import { checkValidData } from '../utils/Validate'; 


// const Login = () => {
//   const [isSignInForm, setIsSignInForm] = useState(true);
//   const [errorMessage,SetErrorMessage] =useState(null);
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
//   const nameRef=useRef(null)

//   const toggleSignInForm = () => {
//     setIsSignInForm(!isSignInForm);
//   };

//   const handleButtonClick = () => {
   
//     const email = emailRef.current.value;
//     const password = passwordRef.current.value;
//     const name=nameRef.current.value;
   
//     const message = checkValidData(email, password,name);
//     SetErrorMessage(message);  
//   };

//   return (
//     <div>
//       <div>
//         <Header />
//       </div>
//       <div className='absolute inset-0'>
//         <img src={bg} alt='bg-image' className='object-cover w-full h-full opacity-80'></img>
//         <div className="absolute inset-0 bg-black opacity-60"></div>
//       </div>
//       <div>
//         <form onSubmit={(e) => e.preventDefault()} className='relative left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black bg-opacity-50'>
//           <h1 className='p-10 text-3xl font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
//           { !isSignInForm && <input ref={nameRef} type="text" placeholder='Full Name' className='w-full p-2 my-2 bg-gray-500'/>}
//           <input ref={emailRef} type="text" placeholder='Email Address' className='w-full p-2 my-2 bg-gray-500'/>
//           <p className='py-3 text-lg font-bold text-red-500'>{errorMessage}</p>
//           <input  ref={passwordRef} type="password" placeholder="Password" className="w-full p-2 my-2 text-white bg-gray-500" />
//           <button className='w-full p-4 my-2 bg-red-700 rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
//           <p className='my-4 font-semibold text-white cursor-pointer' onClick={toggleSignInForm}>
//             {isSignInForm ? "New to Netflix? Sign up now" : "Already registered! Sign In now"}
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState, useRef } from 'react';
import Header from './Header';
import bg from '../images/bg.jpeg';
import { checkValidData } from '../utils/Validate'; 

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Check if email and password are not empty
    if (!email.trim() || !password.trim()) {
      setErrorMessage("Email and password are required.");
      return; // Exit early if fields are empty
    }

    const message = checkValidData(email, password);
    setErrorMessage(message);  
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='absolute inset-0'>
        <img src={bg} alt='bg-image' className='object-cover w-full h-full opacity-80'></img>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div>
        <form onSubmit={(e) => e.preventDefault()} className='relative left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black bg-opacity-50'>
          <h1 className='p-10 text-3xl font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          { !isSignInForm && <input ref={nameRef} type="text" placeholder='Full Name' className='w-full p-2 my-2 bg-gray-500'/>}
          <input ref={emailRef} type="text" placeholder='Email Address' className='w-full p-2 my-2 bg-gray-500'/>
          <p className='py-3 text-lg font-bold text-red-500'>{errorMessage}</p>
          <input  ref={passwordRef} type="password" placeholder="Password" className="w-full p-2 my-2 text-white bg-gray-500" />
          <button className='w-full p-4 my-2 bg-red-700 rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='my-4 font-semibold text-white cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign up now" : "Already registered! Sign In now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
