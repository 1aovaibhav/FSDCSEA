import React from 'react'
import Child1 from './component/Child1'
function AppProps() {
const data={
    name:"Vaibhav",
    branch:"CSE",
    section:"A"
}

  return (
    <div>
        <Child1 obj={data}/>
    </div>
  )
}

export default AppProps