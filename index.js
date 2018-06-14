var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/tekst') {
        fs.readFile('./tekst.txt','utf8', function(err,data){
            if (err) throw err;
            response.write(data);
            response.end();
        })
    } else {
        response.statusCode = 404;
        response.write('<img src="https://cdn.pixabay.com/photo/2015/03/10/06/30/boy-666803_960_720.jpg" alt="Wrong way">');
        response.end();
    }
});

server.listen(8080); 