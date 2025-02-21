const http=require('http');
const port=2527
const server = http.createServer((req,res)=>{
    console.log("inside server body");
    if(req.url=='/' && req.method=="GET"){
        
        res.setHeader('Content-Type',"text/html");
        //console.log(Object.keys(req));
        //console.log(req.url+" "+req.method);
        res.write("<div style='height:200px; background-color:yellow'><h1 style='color:red;'>Welcome to server</h1></div>");
        res.end("<h2>Server has ended</h2>");
    }
    if(req.url=='/show' && req.method=="GET"){
        // res.setHeader('Content-Type',"application/json");

        res.end(JSON.stringify({
            msg:"successfully hit api"
        }))
    }
    if(req.url=='/show' && req.method=="POST"){
        // res.setHeader('Content-Type',"application/json");

        res.end(JSON.stringify({
            msg:"successfully hit POST api @ /show"
        }))
    }
})
server.listen(port,()=>{
    console.log("server is running on:" + port);
})