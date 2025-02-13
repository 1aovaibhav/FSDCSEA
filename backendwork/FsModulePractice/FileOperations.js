const promise = require('fs').promises;

async function readAndWriteFile() {
    try {
       
        const data = await promise.readFile('StuData.json', { encoding: 'utf-8' });
        await promise.writeFile('updatedRecord.json', data);
        console.log("Data written successfully");
    } catch (err) {
        console.log(err);
    }
}
readAndWriteFile();
async function read() {
        const data= await promise.readFile('updatedRecord.json',{encoding:'utf-8'});
        console.log(data);
}

const obj={
    read
}



module.exports=obj;


