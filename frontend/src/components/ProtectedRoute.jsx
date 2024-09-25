import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {

    const {Component} = props;
    const navigate = useNavigate();

    useEffect(()=>{
        let login = window.localStorage.getItem("login");
        if(!login){
            navigate("/");
        }
    });

  return (
    <div>
      <Component/>
    </div>
  )
}

export default ProtectedRoute
