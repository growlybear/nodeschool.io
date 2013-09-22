var through = require('through');
var split = require('split');
var count = 0;

var transforms = [
    function (str) { return str.toUpperCase(); },
    function (str) { return str.toLowerCase(); }
];

process.stdin
    .pipe(split())
    .pipe(through(function (line) {
        count++;
        console.log(
            transforms[count % 2](line.toString())
        );
    }))
    .pipe(process.stdout);
