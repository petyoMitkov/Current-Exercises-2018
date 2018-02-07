let input1 = ["5 1 7 4 8"];             // Output 19
let input2 = ["5 1 7 6 5 6 4 2 3 8"];   // Output 24

solve(input2);

function solve(input) {
    let numbers = input[0].split(" ");
    numbers = numbers.map(Number);

    let peaks = [];
    let result = 0;
    
    numbers.forEach((number, i) => {
        if (isPeak(i)) {
            peaks.push(i);
        }
    });

    let holder = 0; 
    for (let i = 0; i < peaks.length - 1; i += 1) {
        let start = peaks[i];
        let end = peaks[i+1];

        for (let j = start; j <= end; j += 1) {
            holder += numbers[j];
        }

        if (result < holder) {
            result = holder;
        }
        holder = 0;        
    }

    console.log(result);

    // Inner functions
    function isPeak(i) {
        if (i === 0 || i === numbers.length - 1) {
            return true;
        }
        if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
            return true;
        }
        return false;
    }
}