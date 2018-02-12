function testMapObj() {
    let phonebook = new Map();

    phonebook.set("Ivan", 3596526826654);
    phonebook.set("Petyo", 35956565656656);
    phonebook.set("Ivan", 091510);

    // Convert Map Object to Array and print
    [...phonebook].forEach(([name, number]) => console.log(number));
}
testMapObj();


