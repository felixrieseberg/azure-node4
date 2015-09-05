var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World from Node.js ' + process.version + '!\n');
}).listen(process.env.port);

console.log('Node.js Server ' + process.version + 'listening on ' + process.env.port)