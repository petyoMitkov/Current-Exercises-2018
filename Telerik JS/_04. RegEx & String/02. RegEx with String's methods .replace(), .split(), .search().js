let text = "51  2,2    12,,,3  15 ";

console.log("Original String: " + text);

let a = [];

text.split(/[\s,]+/g)
    .map(Number)
    .forEach(function(x) {
        if(x !== 0) {
            return a.push(x);
        }
    });

console.log("--------------------------------");
console.log(a);
console.log("--------------------------------");
console.log(".replace(/[,]+/g, '') = " + text.replace(/[,]+/g, ""));
console.log("--------------------------------");
console.log(".search('5') = " + text.search("5"));


console.log("-------------.split().map().filter()-------------------");
console.log( ".filte() = " + 
    text.split(/[ ,]+/g)
        .map(Number)
        .filter(x => x > 50)
);

console.log("-------------.split().map().sort()-------------------");
console.log(
    text.split(/[\s,]+/g)
        .map(Number)
        .sort((a, b) => a - b)
);

