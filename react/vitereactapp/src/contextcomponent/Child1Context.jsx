import React from 'react'
import { useState, createContext, useContext } from "react";
import { UserContext } from '../AppContext';
function Child1Context() {
  const {data} = useContext(UserContext);
  // console.log(recievecontext);
  
  return (
    <div>Child1Context
      <div>Name: {data.name}</div>
    </div>
  )
}

export default Child1Context