import React, { useState } from 'react'


function StudentState() {
    const[count,setCount]=useState(100);
function increment(){
  setCount(count+4)
}
function decrement(){
  setCount(count-10)
}

  return (
    <div>
      
      <div>{count}</div>
      <div>
        <button onClick={increment}>DoIncrement</button>
        <button onClick={decrement}>DoDecrement</button>
      </div>
    </div>
  )
}

export default StudentState
