export const checkValidData=(email,password,name)=>{
const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  
const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{}|\\[\]:;<>/?]).{8,}$/.test(password);
const isName = /^[a-zA-Z\s'-]{1,50}$/.test(name);
if(!isName) return "Please Enter Valid Name "; 
if(!isEmailValid)return "Email Id is Not Valid";
if(!isPasswordValid) return "Please Enter valid password";
return null;
};

  

  