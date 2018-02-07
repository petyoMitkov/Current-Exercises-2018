/* Logic: Return the biggest sum between two peaks including peaks value 
   Example: [1 0 1 0 2] = (1+0+1) and (1+0+2) => 2 and 3 => return 3

    * 1. forEach =>  isPeak
    *   if (input[0] || input[input.length]) return true;  
    *   if (2 > 1 || 2 > 3) return true;                   
    *
    * 2. For loop on peaks[] // index arr
    *   for ( peaks  ) {  
    *        start = peaks[i];
    *        end = peaks[i+];
    *        for (numbers from start to end) {
    *            holder += number[j];
    *        }
    *        if ( holder > result ) result = holder; or Math.max.apply(null, result[])
    *    }
*/

let input1 = ["5 1 7 4 8"];             // Output 19
let input2 = ["5 1 7 6 5 6 4 2 3 8"];   // Output 24

solve(["1 0 1 0 2"]);
solve(input1);

function solve(args) {
    let input = args[0].split(" ").map(Number);

    // Get Peaks
    let peaks = [];
    input.forEach((element, index) => {
        if (index === 0 || index === input.length - 1) {
            peaks.push(index);
        } else if (element > input[index - 1] && element > input[index + 1]) {
            peaks.push(index);
        }       
    });

    // Loop thru Peaks
    let holder = 0;
    let result = [];    
    for (let i = 0; i < peaks.length - 1; i +=1) {
        let start = peaks[i];
        let end = peaks[i + 1];

        // Loop thru Input with Peak index and sum the numbers between two peaks
        for (let k = start; k <= end; k += 1) {
            holder += input[k];
        }
        result.push(holder);
        holder = 0; 
    }
    console.log(Math.max.apply(null, result));
}
