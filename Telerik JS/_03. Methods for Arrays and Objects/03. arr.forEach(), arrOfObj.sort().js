const arr = [1, 42, 7, 9, 13, 10, 20, -3, -1, 0, 20];

arr.forEach(x => console.log(x));

arr.map((_, i) => i + 1)
    .filter(x => x < 4)
    .forEach(x => console.log(" *** " + x));

// arr.sort() do not return new Arr ! ================================================
console.log("arr.sort() ====================");
console.log(arr.sort((a, b) => a - b));
console.log(arr.sort((a, b) => b - a));

let test = arr.sort((a, b) => b - a).map(a => a + 1);
//console.log(test);
//test.forEach(x => console.log("=> " + (x + 10)));

console.log(arr);


// arrOfObjects.sort() ============================================================
let people = [
    {name: "Pesho", age: 45},
    {name: "Doncho", age: 50},
    {name: "Atanas", age: 25},
    {name: "Encho", age: 20}
];


people.sort((a, b) => a.age - b.age);
console.log("---------------------------");
console.log("Sort Arr of Objects by Age");
console.log(people);

people.sort((a, b) => a.name > b.name);
console.log("---------------------------");
console.log("Sort Arr of Objects by Name");
console.log(people);
