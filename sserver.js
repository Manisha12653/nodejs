const http=require('http');
console.log("ss")
http.createServer(function getDetails(req,res){
    if(req.url==='/'){

    res.writeHead(200,{"format":"text"});
    res.write("server is running on port 3000");}

    if(req.url==='/manisha/boora')
    {
       
            res.writeHead(200,{"format":"text"});
            res.write("manisha is running on port 3000");
    }
    res.end();
}).listen(3000) 