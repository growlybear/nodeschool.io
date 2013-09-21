var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {

    if (req.method != 'GET') {
        return res.end('need to GET the json time');
    }

    var parts = url.parse(req.url, true);
    var time = parts.query.iso;
    var date = new Date(time);

    var jsonTime = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };

    var unixTime = {
        unixtime: date.getTime()
    };


    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (parts.pathname == '/api/parsetime') {
        res.write(JSON.stringify(jsonTime));
    }
    if (parts.pathname == '/api/unixtime') {
        res.write(JSON.stringify(unixTime));
    }

    res.end();

}).listen(8000);
