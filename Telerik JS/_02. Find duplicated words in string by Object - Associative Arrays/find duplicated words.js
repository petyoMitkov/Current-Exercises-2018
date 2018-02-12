let input = "word pesho josho pesho petar ivan ivan";

function solve(str) {
    let arr = str.split(" ");
    let result = {};

    for (let word of arr) {
        if (!result[word]) {
            result[word] = 1;
        } else {
            result[word] += 1;
        }
    }

    for (let name in result) {
        if (result[name] > 1) {
            console.log(`${name} ` + result[name]);
        }
        console.log(name);
    }

    
}

solve(input);