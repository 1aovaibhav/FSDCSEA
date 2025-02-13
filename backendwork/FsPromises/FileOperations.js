const promise = require('fs').promises;
const fsp=promise.writeFile('data.txt',"Hello written using promises");
fsp.then(()=>{
    console.log("data written ");
}).catch((err)=>{
    console.log(err);
})
async function readFileAsync() {
    const data  = await promise.readFile('data.txt',{encoding:'utf-8'});
    console.log(data);
}
readFileAsync();