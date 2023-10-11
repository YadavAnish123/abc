// src/components/Login.js
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './context/AuthContext';
import { RegistrationContainer } from "./Register";
import {RegistrationForm} from "./Register";
import {InputField} from "./Register";
import {SubmitButton} from "./Register";
import { GridLeft } from './Register';
import { GridRight } from './Register';
// import { Button } from './styles/Button';
function Login() {
  const { login } = useAuth();
  
  const  navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
const riz =()=> {
  navigate('/register');
}
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:3001/api/v1/auth/login', formData);
    

    if (response.status === 200) {
      console.log("  login successful");
     
      alert("login succefully");
     
 
  console.log("token",response.data.token);
  console.log("hhiii",response.data);

  login(response.data); // Set user data from the response
      navigate('/');
    } else {
      console.log("not login");
      alert("username mismatch or password mismatchh");
      // Login failed, handle errors
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle network errors or invalid login
  }
};

const rizw ={
  width:"300px",
  height:"300px",
}
  return (
    <RegistrationContainer>
    
      <RegistrationForm onSubmit={handleSubmit}>
      <GridLeft>
        <riz>
          <img style={rizw}  src="images/hero.jpg" alt="logoo" /></riz>
        </GridLeft>
        <GridRight>
        <h2 style={{textAlign:"center"}}>Login</h2>
        <InputField
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <SubmitButton type="submit" >Login</SubmitButton>
       <button type='button'>Forget Password</button>
       <button type='button'>Change Password</button>
      <p style={{textAlign:"center"}}>Registarion Not Yet <button type='button' onClick={riz}>
        Sign up</button></p>
      {/* <SubmitButton type="submit" onClick={riz}>Sign Up</SubmitButton> */}
    
    </GridRight>
      </RegistrationForm>
    </RegistrationContainer>
  );
}

export default Login;
