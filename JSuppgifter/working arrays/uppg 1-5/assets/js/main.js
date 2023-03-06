// uppg 1

var fruits = ["Apple", "Lemon", "Banana", "Kiwi"];
// Setting variable "fruits" to an array of values that you can see above

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
// And now logging them individually from first to last to the console


// uppg 2

console.log(fruits.length);


// uppg 3

for (forfruits = ["Peach", "Dragonfruit", "Pomegranate", "Lime"]; forfruits >= [0]; forfruits++) {
	document.write(forfruits);
}


// uppg 4-5

// Map method - Creates a new array of the previous one but with changes.

let num = [2, 4, 8, 16];

const numsecond = num.map(x => x * 2);
console.log(numsecond);

// Push method - Creates a new value/element inside the array and returns it.

let numpush = num.push("Money");
console.log(numpush)

// Pop method - Removes a value/element from the array and returns it.

let numpop = num.pop(2);
console.log(numpop);

// Shift method - Removes the first value/element in the array and returns it.

let numshift = num.shift();
console.log(numshift);

// unShift method - Adds new elements/values to the beginning of an array,
// 					and then returns the new full length of that array.

let numUnshift = num.unshift(6, 12);
console.log(numUnshift);

// concat method - Creates a new array by combining two or more arrays together.
//                 (the arrays that are used to concat will not be changed however.)

const numarr1 = [2, 4];
const numarr2 = [8, 16];

let numarrcombi = numarr1.concat(numarr2);
console.log(numarrcombi);

// splice method - Copies a part of the array into a new one.

const wordarray = ["Rayquaza", "Kyogre", "Groudon", "Lugia", "Mewtwo", "Zekrom"];

console.log(wordarray.slice(2));
console.log(wordarray.slice(2, 4));
console.log(wordarray.slice(1, 3));
console.log(wordarray.slice(2, -1));
console.log(wordarray.slice(-2));
console.log(wordarray.slice());
