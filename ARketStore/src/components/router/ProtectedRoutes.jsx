import React, { useEffect } from "react";
import {useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
    const {Component} = props
    const Navigate = useNavigate();
    useEffect(() => {
     let login = sessionStorage.getItem('login');
     if(!login){
        Navigate('/login')
     }
    })
    
  return (
   <>
<Component />
   </>
  );
};

export default ProtectedRoute;