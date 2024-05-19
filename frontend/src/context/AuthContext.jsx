import React from 'react';
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSession } from "../services/api";

export const AuthContext = createContext();

export default function AuthProvider({children}) {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function login (email, password){

    try{
      const response = await createSession(email, password);

      const {user, token} = response.data;
      
      localStorage.setItem("email", user.email);
			localStorage.setItem("token", token);
  
      setUser(user);
      navigate("/admin");
    }
    catch(error){
      return error;
    }
  };

  function logout(){
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    
      let userRecovered = localStorage.getItem("email");
      if(userRecovered) setUser(userRecovered);

      let tokenRecovered = localStorage.getItem("token");
      
      if(tokenRecovered){
        var token = tokenRecovered.replace(/["]/g, '');
        localStorage.setItem("token", token);
      }

      setLoading(false);
  },[]);


  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, login, logout, loading }}>
    	{children}
  	</AuthContext.Provider>
  )
}