document.onload = setTimeout(function() {
    solve(["111"]);
    //solve(["450"]);
}, 200);

function solve(inputArr) {
    let yieldPerDay = Number(inputArr[0]);
    let totalDays = 0;
    let totalNetYield = 0;
    
    while (yieldPerDay >= 100) {
        totalDays++;
        totalNetYield += yieldPerDay - 26;
        
        yieldPerDay -= 10;   // Control the loop    
    }    
    if (totalNetYield >= 26) {
        totalNetYield -= 26;
    }

    console.log(totalDays);
    console.log(totalNetYield);
} 



