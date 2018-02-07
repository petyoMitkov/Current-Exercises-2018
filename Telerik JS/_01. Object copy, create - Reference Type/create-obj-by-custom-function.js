function makePerson(fname, lname) {
    return {
        fname: fname,
        lname: lname,
        getFullName: function() {
            let fullName = this.fname + " " + this.lname;
            console.log(fullName);
        }
    };
}

let pesho = makePerson("pesho", "peshev");
let gosho = makePerson("gosho", "goshev");

pesho.getFullName();
gosho.getFullName();