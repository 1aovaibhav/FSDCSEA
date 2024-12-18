import React, { useState } from 'react'

function Registration({regdata}) {
const[myname,setName]=useState();
const[myemail,setMail]=useState();
const[mypassword,setPassword]=useState();
// const[data,setData]=useState();
    function doRegistration(e){
        e.preventDefault();
        const objectData={
            myname,
            myemail,
            mypassword
        }
        regdata(objectData);
        // setData(objectData);
    }

  return (
    <div>
        {/* {JSON.stringify(data)} */}
          <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input onChange={(e)=>setMail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    
  </div>
 
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={doRegistration}>Registration</button>
</form>
    </div>
  )
}

export default Registration