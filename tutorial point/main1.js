var http=require("http");

http.createServer(function(request,respond){
//send the http header
// http status:ok
//content type: text/plain
respond.writeHead(200,{'content-Type':'text/plain'});

respond.end('hello World\n')

}).listen(8081);

//console will print the message
console.log('Server running at http://127.0.0.1:8081/');