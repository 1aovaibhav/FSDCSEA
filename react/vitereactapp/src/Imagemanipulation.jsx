import React, { useState } from 'react'
import pic from './pic.jpg'
function Imagemanipulation() {
const[height,setHeight]=useState(150);
const[width,setWidth]=useState(150);
const[red,setred]=useState();
const[green,setgreen]=useState();
const[blue,setblue]=useState();

function eheight(){
    setHeight(height+30);
}
function ewidth(){
    setWidth(width+30);
}
function colchange(){
    setred(Math.random()*255);
    setgreen(Math.random()*255);
    setblue(Math.random()*255);
}
function dorotate(){

}
  return (
    <div style={{height:'400px', width:'400px' , border:'2px solid red' }}>
        <div style={{backgroundColor:`RGB(${red},${green},${blue}` ,margin:'30px 80px',paddingLeft:'40px'}}>
            <img src={pic} alt="" height={height} width={width}/>
        </div>
        <div style={{marginTop:'150px'}}>
            <button onClick={eheight}>enhanceheight</button> &nbsp; &nbsp;&nbsp;
            <button onClick={ewidth}>enhancewidth</button>&nbsp;&nbsp;&nbsp;
            <button >rotate</button>&nbsp;&nbsp;&nbsp;
            <button onClick={colchange}> bgc change</button>
        </div>
    </div>
  )
}

export default Imagemanipulation