var concat = require('concat-stream');

process.stdin.pipe(concat(function (body) {
    var ret = body.toString().split('').reverse().join('');
    console.log(ret);
}));
