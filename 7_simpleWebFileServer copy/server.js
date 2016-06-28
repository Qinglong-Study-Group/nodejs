var http = require('http');
var fs = require('fs');

//404
function send404(response) {
    response.writeHead(404,{'Context-Type': 'text/plain'});
    response.write('Error 404: page not found');
    response.end();
}

//handle a user request
function onRequest(request, response) {

    if(request.method == 'GET' && request.url == '/'){
        response.writeHeader(200, {'Context-Type': 'text/plain'});
        fs.createReadStream('./index.html').pipe(response);
    }else{
        send404(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log('Server is now running');