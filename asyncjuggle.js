var http = require('http');
var urls = process.argv.slice(2);


function fetchThese(urls, callback) {
    var count = 0,
        results = [];

    urls.forEach(function (url) {
        http.request(url, function (response) {
            var index = count;
            count++;

            var str = '';

            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;
            });

            //the whole response has been recieved, so we just print it out here
            response.on('end', function () {
                results[index] = str;

                if (index == 2) {
                    callback(null, results);
                }
            });
        }).end();
    });

}


fetchThese(urls, function (err, results) {
    if (err) throw err;

    results.forEach(function (result) {
        console.log(result);
    });
});
