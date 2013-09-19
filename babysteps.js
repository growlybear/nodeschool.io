var args = process.argv.slice(2),
    sum = 0;

args.forEach(function (arg) {
    sum += +arg;
});

console.log(sum);
