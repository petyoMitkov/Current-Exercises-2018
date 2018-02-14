console.log("f.toString() -------------------------");

const f = function(x, y) {
    console.log(x + y);
}
console.log(f.toString());


console.log("------ f.call(context, arg1, arg2, ...) & f.apply(this, [arg1, arg2, ...]) -------"); // context === this in statements
const modifiers = [
    function(x) { return x + 7 },
    function(x) { return x * 2 },
    function(x) { return 42 }
];

modifiers.someFunc = function(x) {
    console.log("arg1 = " + x)
    console.log("this = " + this);
}

console.log(".call()--------------------------");
modifiers.someFunc.call([11, 12, 13], 5);
console.log(".apply()--------------------------");
modifiers.someFunc.apply([200, 300, 400, 500], ["apply-argument 1", "apply-argument 2"]);

