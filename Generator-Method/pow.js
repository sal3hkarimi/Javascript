function* pow(number, limit) {
  let pow = 0;

  while (pow < limit) {
    yield Math.pow(number, pow++);
  }
}

console.log([...pow(2, 5)]); // [ 1, 2, 4, 8, 16 ]
console.log([...pow(3, 3)]); // [ 1, 3, 9 ]
console.log([...pow(5, 5)]); // [ 1, 5, 25, 125, 625 ]
