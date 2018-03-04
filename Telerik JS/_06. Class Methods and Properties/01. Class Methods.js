class Person {
    constructor(name, age, city) {
        this._name = name;
        this._age = age;
        this._city = city;
        this._secretInfo = true;
    }

    ptintPersonInfo() {
        if (this._secretInfo) {
            console.log("This informatino is secret.");
            return;
        }
        let info = `Name: ${this._name}, Age: ${this._age}, City: ${this._city}.`;
        console.log(info);
    }
}

let petyo = new Person("Petyo", 33, "Sofia");

petyo.ptintPersonInfo();