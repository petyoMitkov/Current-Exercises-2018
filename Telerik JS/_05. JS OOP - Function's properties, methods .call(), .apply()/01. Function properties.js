let arr = [20, 15, 65, 2, 80, 250, 3];

function maxValue(arr) {
    let result = Math.max(...arr);  // for Arr works only with ...
    console.log("max value = ", result);

    let x = arr[0];
    for (let i in arr) {
        if (arr[i] > arr[i - 1]) { x = arr[i] }
    }
    console.log("max value = ", x);
}
maxValue(arr);


// function.length, function.name ======================================================
function func(a, b, l) {
    return a + b;
}

console.log("function.length = " + func.length);
console.log("function.name = " + func.name);

// Functions are Objects ========================================
const modifiers = [
    function(x) { return x + 7 },
    function(x) { return x * 2 },
    function(x) { return 42 }
];

modifiers.map(f => f(11))
    .forEach(x => console.log(x));


// arguments ====================================================
const someFunc = function(a) {
    console.log("arg1 + arg2 = " + (arguments[0] + arguments[1]));
    console.log(arguments);
}
console.log("arguments ---------------------");
console.log("f.length = " + someFunc.length);

someFunc(15, 20, 30);
