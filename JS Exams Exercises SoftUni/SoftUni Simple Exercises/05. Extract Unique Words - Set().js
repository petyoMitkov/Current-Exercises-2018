let input = [
    "JS devs use Node.js for",
    "server-side JS",
    "JS devs use JS",
    "-- JS for devs"
];

function solve(strArr) {
    let test = strArr.join("\n");
    let words = test.toLowerCase().split(/\W+/).filter(e => e !== "");
    let result = new Set();

    for (let word of words ) {
        result.add(word);
    }

    console.log([...result].join(", ")); //js, devs, use, node, for, server, side
}

solve(input);  