var fs=require('fs');
var http=require('http');

var server= http.createServer(function(req,res){
    if(req.url==='/home' || req.url==='/')
    {
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
   
      else if(req.url==='/addEmp.html'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/addEmp.html').pipe(res);
}


else if(req.url==='/h1.html'|| req.url==="abc"){
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/h1.html').pipe(res);
} 
console.log('request was made'+ req.url);


});

server.listen(1234,'127.0.0.1');
console.log("listening to 1234"); 