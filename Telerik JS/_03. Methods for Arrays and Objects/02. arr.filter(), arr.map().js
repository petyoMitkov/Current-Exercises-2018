const arr = [1, 42, 7, 9, 13, 10, 20, -3, -1, 0, 20];

let biggerThan10 = arr.filter(x => x > 10);
console.log(biggerThan10);

let isEqual20 = arr.filter(k => k === 20);
console.log(isEqual20);

// arr.map() ===============================

console.log(arr.map(a => a * 2));

console.log(arr.filter(x => x < 0 && x > -4).map(k => k - 100));

console.log(arr.map((e, i) => `Element: ${e} with index ${i}`));

// arr.resuce() ============================

console.log("arr.reduce() = " + arr.reduce((x, y) => x + y, 0));  // 0 strat index



// Override .filter() ======================
Array.prototype.filter = function(f) {
    let filteredArray = [];
    const len = this.length;
    for (let i = 0; i < len; i++) {
        if (f(this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }
    return "Pesho from Override .filter()";
}

console.log(arr.filter(x => x > 15));