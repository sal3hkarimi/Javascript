const array = [1, 2, 3, 4, 5, 6, 7, 8];

function map(arr, callback) {
  const newArr = [];
  for (i in arr) {
    const resultCallback = callback(arr[i], i);
    newArr.push(resultCallback);
  }

  return newArr;
}

const arrayMap = map(array, (a) => a * 2);
console.log(arrayMap); // [2,  4,  6,  8, 10, 12, 14, 16]
