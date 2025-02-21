const fs = require('fs').promises;
const http = require('http');
const PORT = 2527;
const server = http.createServer(async(req,res)=>{
    // try{

    //     res.setHeader('Content-Type','text/html');
    //     res.write('Welcome to HTTP and FS module');
    //     const data = await fs.readFile('student.json',{encoding:'utf-8'});
    //     res.write(`<h2 style="color:green;">${data}</h2>`)
    //     res.end("--------------response ended------------");
    // }
    // catch(err){
    //     console.log(err);
    // }
    if(req.url=="/home" && req.method=="GET"){
        res.setHeader('Content-Type','text/html');
        const htmltemp = await fs.readFile('home.html');
        res.end(htmltemp);
    }
    else if(req.url=='/textdata' && req.method=="GET"){
        res.setHeader('Content-type','text/html');
        const data = await fs.readFile('text.txt');
        res.end(data);
    }
    else res.end('error url');
})
server.listen(PORT,()=>{
    console.log("server is running "+PORT);
})
