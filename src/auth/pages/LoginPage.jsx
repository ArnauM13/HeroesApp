// @ts-nocheck
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const {login} = useContext(AuthContext);
  const navigate = useNavigate(); // custom hook per gestionar la navegació creat pels de react-router-dom

  const onLogin = () => {
    
    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Arnau')
    navigate(lastPath, {
      replace: true
    });
  
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={onLogin}>
          Login
      </button>
    </div>
  )
}
