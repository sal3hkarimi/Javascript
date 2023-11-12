function* idMaker() {
  let i = 0;
  while (true) {
    yield ++i;
  }
}

const ids = idMaker();

console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
console.log(ids.next().value); // 3
