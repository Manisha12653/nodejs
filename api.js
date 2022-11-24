const http=require('http'); 
const data=require('./data.js');
console.log(data)
http.createServer(function(req,response){
    response.writeHead(200,"{application:txt}");
    response.write(JSON.stringify(data.data));
    response.end();
}).listen(3100);