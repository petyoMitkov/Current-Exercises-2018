const arr = [1, 42, 7, 9, 13, 10, 20, -3, -1, 0];

//  arr.every() ===============================================

function isOdd(x) {
    return x % 2 === 1;
}
function areSmallerThan100(k) {
    return k < 100;
}

const everyDemo = arr.every(areSmallerThan100);
//console.log(everyDemo);

// arr.some() ===============================================

function isHas20(n) {
    return n === 20;
}

const someDemo = arr.some(isHas20);
console.log(someDemo);


