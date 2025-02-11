import React from 'react'
import Child2 from './Child2'

function Child1({obj}) {
   
  return (
    <div>Child1
    <div>{obj.name}</div>
    <Child2 data2={obj}/>
    </div>
  )
}

export default Child1