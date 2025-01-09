var http = require("http");
var Dt = require("./DateTimeModule");

http.createServer(function (req, res) {
res.writeHead(200, {"Content-Type": "text/html"});
res.write("Hello World!; Today's date and time are: " + Dt.myDateTime());
res.end();
}).listen(8080);