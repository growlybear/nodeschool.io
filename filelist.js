var fs = require('fs');

module.exports = function (path, ext, callback) {
    fs.readdir(path, function (err, files) {
        if (err) return callback(err);

        var pattern = new RegExp('\\.' + ext + '$'),
            matches = [];

        files.forEach(function (file) {
            if (file.match(pattern)) {
                matches.push(file);
            }
        });

        return callback(null, matches);
    });
};
