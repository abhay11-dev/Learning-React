import React from 'react'
import { useState,useContext } from 'react';
import UserContext from '../context/UserContext.js';
function login() {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default login
