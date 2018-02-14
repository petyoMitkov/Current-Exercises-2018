let text = "Hello, Petyo!";

console.log(text.replace("H", "@"));
console.log(text.replace(/H/, "@@"));

console.log(text.replace(/l/g, "L"));
console.log(text.replace(/[a-z]+/g, "4"));

console.log(typeof /a/);


// RegEx from string
console.log(new RegExp('a'));

// escape [ 
console.log("--------- escape [  ------------");
let text2 = "dfsdf sdf aa[aa";

let regExp = new RegExp("\\[", "g");
console.log(text2.replace(regExp, "_"));



// regEx.text()
console.log("--------- regEx.test() ------------");
let telephone = /^\+[0-9]{10}$/   // match 10 numbers

console.log(telephone.test("+1234567890"));    // true
console.log(telephone.test("sds  +1234567890")); // false comse from ^



// regEx.exec()  // RegEx.exec(String)
console.log("--------- regEx.exec() ------------");

let someRegEx = /[0-9]/g;

console.log(someRegEx.exec("ds42"));
console.log(someRegEx.exec("ds42"));



// regEx.match() // String.match(RegEx)    *Use Match insted .exec()
console.log("--------- regEx.match() ------------");

console.log("123 dfs 35".match(/[0-9]/g));
