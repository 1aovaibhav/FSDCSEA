const fs = require('fs');

function dataWrite(){
    try{

        fs.writeFileSync("data.txt","Hello Node js using FS MOdule");
        console.log("data written succsessfully");
    }
    catch(err){
        console.log("error while writing "+err);
    }
}

function readFile() {
    try {
        
        const rf = fs.readFileSync("data.txt",{encoding: 'utf-8'});
        console.log(rf);
    } catch (error) {
         console.log("error while writing "+error);
    }
}
function append() {
    try {
        
        fs.appendFileSync('data.txt',"appending using fs module");
console.log("data append");

    } catch (error) {
         console.log("error while writing "+error);
    }
}
function deleteFile() {
    try {
        
        fs.unlinkSync('data.txt');
        console.log('file deleted');
    } catch (error) {
         console.log("error while writing "+error);
    }
}



const obj={
    dataWrite,
    readFile,
    append,
    deleteFile
}



module.exports=obj;