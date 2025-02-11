const fs = require('fs')
fs.writeFile('data.txt',"Welcome to session",()=>{
    console.log("data written successfully");
})

fs.appendFile('data.txt',"This is the appended data",()=>
{
    console.log("data appended");
})
fs.readFile('data.txt',(err,data)=>{
    if(err) console.log(err);
    console.log(data.toString());
})
fs.unlink('data.txt',()=>{
    console.log("file deleted");
})
