import React from 'react'
import { useState, createContext, useContext } from "react";
import Child1Context from './contextcomponent/Child1Context';
import Child2Context from './contextcomponent/Child2Context';
import Child3Context from './contextcomponent/Child3Context';
const UserContext = createContext();
function AppContext() {
    
    const data={
        name:"Vaibhav",
        branch:"CSE",
        section:"A"
    }
    const [user, setUser] = useState({data});
  return (
    <div>
        <h1>HI</h1>
        <UserContext.Provider value={user}>
        
        <Child1Context />
        
      </UserContext.Provider>
    </div>
   


  )
}

export{
    UserContext
}
export default AppContext
