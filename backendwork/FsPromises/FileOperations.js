const promise = require('fs').promises;
const fsp=promise.writeFile('data.txt',"Hello written using promises");
fsp.then(()=>{
    console.log("data written ");
}).catch((err)=>{
    console.log(err);
})