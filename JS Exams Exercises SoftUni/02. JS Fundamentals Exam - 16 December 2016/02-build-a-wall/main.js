document.onload = setTimeout(function () {
    solve(["21", "25", "28"]);
    solve(["17"]);
    solve(["28"]);
}, 200);

function solve(inputArr) {
    let input = inputArr.map(Number);
    let concretePerDay = 0;
    let totalConcreteForTheWall = [];

    while (true) {
        for (let i = 0; i < input.length; i++) {
            if (input[i] < 30) {
                input[i] += 1;
                concretePerDay += 195;
            }
        }
        if (concretePerDay === 0) {
            break;
        }

        totalConcreteForTheWall.push(concretePerDay);
        concretePerDay = 0;
    }

    console.log(totalConcreteForTheWall);
    console.log((totalConcreteForTheWall.reduce((a, b) => a + b)) * 1900 + " pesos" ) ;
}