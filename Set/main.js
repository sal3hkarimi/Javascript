const numbersList = [0, 1, 2, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = new Set(numbersList);

for (const num of uniqueNumbers) {
  console.log(num); // 1, 2, 3
}
console.log(uniqueNumbers.size); // 3

uniqueNumbers.add(12);
console.log(uniqueNumbers); // Set(7) { 0, 1, 2, 3, 4, 5, 12 }

uniqueNumbers.add(3).add(14).add(15);
console.log(uniqueNumbers); // Set(9) { 0, 1, 2, 3, 4, 5, 12, 14, 15 }

console.log(uniqueNumbers.has(18)); // false

const deleteResult = uniqueNumbers.delete(12); // true

uniqueNumbers.clear();
console.log(uniqueNumbers); // Set(0) {}

console.log("------------------ set in string ----------------------");

const letter = new Set("banana");
console.log(letter); // Set(3) { 'b', 'a', 'n' }
console.log([...letter].join("")); // ban

console.log("------------------ set in object ----------------------");

const items = new Set([{ a: 1 }, { a: 1 }]); // Set(2) { { a: 1 }, { a: 1 } }

console.log("------------------ convert set to array ----------------------");

const numbers = new Set([1, 2, 2, 2, 3]);
const toArray = [...numbers]; // [1, 2, 3]
