class Cat {
    constructor(age) {
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        this._age = newAge;
    }
}

let tom = new Cat(22);

console.log(tom.age);
tom.age = 32;
console.log(tom.age);

////////////////////////////////////////

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get fullname() {
        return this._firstName + ' ' + this._lastName;
    }

    set firstName(newFirstName) {
        this._firstName = newFirstName;
    }

    set lastName(newLastName) {
        this._lastName = newLastName;
    }
}

let pesho = new Person("Petar", "Ivanov");
console.log(pesho.fullname);
pesho.firstName = "John";
console.log(pesho.fullname);