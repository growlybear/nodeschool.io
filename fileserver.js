var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(process.argv[2]);

    stream.pipe(res);

}).listen(8000);
