var through = require('through');

function write(buf) {
    this.queue(buf.toString().toUpperCase());
}

function end() {
    // a falsy value signals an end of data
    this.queue(null);
}

var tr = through(write, end);

process.stdin.pipe(tr).pipe(process.stdout);
