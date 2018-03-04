// extends, super()
const _validator = {
    ageValidation: function(x) {
        if (x <= 0) {
            throw new Error("Age must be bigger than zero.");
        }
    }
}

class Mammal {
    constructor(age) {
        _validator.ageValidation(age);
        this._age = age;
    }    
}

class Person extends Mammal {
    constructor(name, age) {
        super(age);
        this._name = name;        
    }
}

let petyo = new Person("Petyo", 25);
console.log(petyo);

// ----------------------------------------------
class Dog extends Mammal {
    constructor(name, age) {
        super(age);
        this._name = name;
    }

    dogInfo() {
        console.log(`Dog's name is ${this._name}, ${this._age} years old`);
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

}

let sharo = new Dog("Sharo", 3);
sharo.dogInfo();
console.log(sharo.name);
sharo.name = "Gencho";
console.log(sharo.name);
