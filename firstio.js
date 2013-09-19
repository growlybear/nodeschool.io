var fs = require('fs'),
    os = require('os'),
    path = require('path'),
    file = process.argv[2],
    lines;

if (!file) {
    console.error('\nUsage: node ' + __filename + ' <file>\n');
    process.exit(1);
}

file = fs.readFileSync(file, 'utf8');
lines = file.split(os.EOL);

console.log(lines.length);
