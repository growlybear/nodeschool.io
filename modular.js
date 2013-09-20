var fs = require('fs'),
    filelist = require('./filelist');

filelist(process.argv[2], process.argv[3], function (err, data) {
    if (err) {
        console.warn('Error reading files');
        process.exit(1);
    }

    data.forEach(function (item) {
        console.log(item);
    });
});
