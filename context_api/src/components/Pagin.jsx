import React from 'react'
import { useState,useContext } from 'react';
import UserContext from '../context/UserContext.js';
function Pagin() {

    let {user} = useContext(UserContext);
  return (
    <div>
      <h1>Welcome {user?.username || "Guest"}</h1>
    </div>
  )
}

export default Pagin
