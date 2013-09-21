// cf. http://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request

var http = require('http');

var callback = function(response) {
    var str = '';

    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
        str += chunk;
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
        console.log(str.length);
        console.log(str);
    });
};

http.request(process.argv[2], callback).end();
