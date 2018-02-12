// Find missing number in non-sorted arr with 1 loop for 1 - 1000
function solve(numArr) {
    /* With 2 Loops
        // Loop 1
        let sortArr = numArr.sort((a,b) => a - b);  

        // Loop 2
        for (let i = 0; i < sortArr.length; i += 1) {  
            if (sortArr[i] !== i + 1) {
                console.log(i + 1 + " is missing in the array");
            }
        }
    */

    // With 1 loop
    let setComper = new Set(numArr);

    for (let i = 0; i < numArr.length; i++) {
        if (!setComper.has(i + 1)) {
            console.log(i + 1 + " missing");
        }
    }
}

solve([1, 3, 2, 5, 4, 7, 9, 10, 8]);