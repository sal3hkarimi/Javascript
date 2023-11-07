// Example 1: A higher-order function that applies a function to each element of an array
function applyToEach(arr, func) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];

// Define a simple function to double a number
function double(x) {
  return x * 2;
}

// Use the higher-order function to apply the 'double' function to each element of the 'numbers' array
const doubledNumbers = applyToEach(numbers, double);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

/**
 * ---------------------------------- Another example ----------------------------------
 * **/

// Example 2: A higher-order function that filters elements of an array based on a condition
function filterArray(arr, condition) {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}

// Example usage:
const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Define a function to check if a number is even
function isEven(x) {
  return x % 2 === 0;
}

// Use the higher-order function to filter even numbers from the 'numbers' array
const evenNumbers = filterArray(numbersList, isEven);

console.log(evenNumbers); // Output: [2, 4, 6, 8]

// Define a function to check if a number is greater than 5
function isGreaterThan5(x) {
  return x > 5;
}

// Use the higher-order function to filter numbers greater than 5 from the 'numbers' array
const numbersGreaterThan5 = filterArray(numbersList, isGreaterThan5);

console.log(numbersGreaterThan5); // Output: [6, 7, 8, 9]
