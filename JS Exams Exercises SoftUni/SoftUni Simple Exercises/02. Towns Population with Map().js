let input = [
    "Sofia <=> 2000",
    "Vratsa <=> 1000",
    "Sofia <=> 500"
]; // Expected result: { "Sofia": 2500, "Vratsa": 1000 }


// Solve with Map
function mapSolve(arr) {
    let map = new Map();

    for (let row of arr) {
        let [town, people] = row.split(" <=> ");
        people = Number(people);

        if (!map.has(town)) {
            map.set(town, people);
        } else {
            map.set(town, map.get(town) + people);
        }
    }
    console.log(map);
}
mapSolve(input);


// Solve with Arr
function solve(inputArr) {
    let result = {};
    for (let row of inputArr) {
        console.log(row);
        let [town, people] = row.split(" <=> ");
        people = Number(people);
        if (!result[town]) {
            result[town] = people;
        } else {
            result[town] = result[town] + people;
        }
    }
    console.log(result);
}

solve(input);
