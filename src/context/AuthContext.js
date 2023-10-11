// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const  navigte=useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  // const [userr,setuserr]=useState(null); // Add user state
// const [userorder, setuseorder] =useState(null);
// const[lord,setlord]=useState(null);
  // const rr=(yy)=>{
  //   setuserr(yy);

  
  // }
  const login = (userData) => {

    // Implement your login logic here
    localStorage.setItem('authToken', userData.token);

    setIsAuthenticated(true);
    setUser(userData.user);
   
    // localStorage.setItem('authToken', 'yourAuthToken');
    
  };
// const order =(userOrder) => {
//   setuseorder(userOrder);
// }

  const logout = () => {
    // Implement your logout logic here
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setUser(null);
    navigte('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated,user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
