function forFactorial(number) {
  let result = 1;
  for (let i = 0; i < number; i++) {
    result = result * (number - i);
  }
  return result;
}

console.log(forFactorial(3)); // 6
console.log(forFactorial(4)); // 24

function methodFactorial(number) {
  return number === 1 ? 1 : number * methodFactorial(number - 1);
}

console.log(methodFactorial(3)); // 6
console.log(methodFactorial(4)); // 24
