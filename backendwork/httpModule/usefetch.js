const http=require('http');
const port=2527
const server = http.createServer(async(req,res)=>{
        res.setHeader("Content-Type","text/html");
        res.write("welcome to server\n");
        const data = await fetch("https://fakestoreapi.com/products");
        const jsondata = await data.json();
        const htmltemp = `
        <html>
            <body>
                <h2>${jsondata[0].category}</h2>
                <img src="${jsondata[0].image}" height ="100px" width="100px">
            </body>
        </html>
        `
        
        res.end(htmltemp);
    }
)
server.listen(port,()=>{
    console.log("server is running on:" + port);
})