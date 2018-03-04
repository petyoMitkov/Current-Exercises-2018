class Person {
    constructor(name, age) {
        this._name = name; 
        this._age = age;
    }
}

Person.prototype.introduce = function() {
    console.log(`Hi, I an ${this._name}`);
};

Object.defineProperty(Person.prototype, "age", {
    get: function() {
        return this._age;
    }, 
    set: function(newAge) {
        this._age = newAge;
    }
});


let p = new Person("Ivan", 33);

console.log(p._name);
p.introduce();

console.log(p.age);
p.age = 43;
console.log(p.age);
