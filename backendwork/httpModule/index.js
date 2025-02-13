const http=require('http');
const port=2527
const server = http.createServer((req,res)=>{
    console.log("inside server body");
    res.setHeader('Content-Type',"text/html");
    res.write("<div style='height:200px; background-color:yellow'><h1 style='color:red;'>Welcome to server</h1></div>");
    res.end("<h2>Server has ended</h2>");
})
server.listen(port,()=>{
    console.log("server is running on:" + port);
})