var router = require("./router");

function start(){
    var http = require("http");
    var url = require("url");

    function onRequest(request, response){
        var pathName = url.parse(request.url).pathname;
        console.log("Request for " + pathName + " received.");
        router.route(pathName);
        response.writeHead(200, { "Content-Type":"text/html" });
        response.write("Hi");
        response.end();
    
    }
    
    http.createServer(onRequest).listen(8080);
    console.log("Server has started at port 8080.");

}



exports.start = start;
