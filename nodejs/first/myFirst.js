var http = require('http');
var dt = require('./firstmodule');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Hello World!<br><br>");
  res.write("The date and time are currently: " + dt.myDateTime() + "<br><br>");
  res.write(req.url + "<br><br>")
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write(txt + "<br><br>");
  res.end();
}).listen(7357); 