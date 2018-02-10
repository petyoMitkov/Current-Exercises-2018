// https://www.youtube.com/watch?time_continue=4170&v=MjXy4JjnNw4

let input = [
  	"JS devs use Node.js for server-side JS.",
  	"-- JS for devs"
];

function solve(input) {
	let text = input.join("\n");
	console.log(text);
	let words = text.split(/[^A-Za-z0-9_]+/)
		.filter(w => w !== " ");
	let result = {};

	for (let word of words) {
		result[word] ? result[word]++ : result[word] = 1;
	}
	console.log(result);
}

solve(input);
