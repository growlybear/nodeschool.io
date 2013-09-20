var fs = require('fs'),
    os = require('os'),
    path = process.argv[2],
    ext = process.argv[3];

var results = fs.readdir(path, function (err, files) {
    var pattern = new RegExp('\\.' + ext + '$');

    files.forEach(function (file) {
        if (file.match(pattern)) {
            console.log(file);
        }
    });
});
