var fs = require('fs'),
    os = require('os');

fs.readFile(process.argv[2], 'utf8', function (err, contents) {
    var lines = contents.split(os.EOL);
    console.log(lines.length);
});
