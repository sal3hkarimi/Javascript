const array = [1, 2, 3, 4, 5, 6, 7, 8];

function filter(arr, callback) {
  const newArr = [];
  for (i in arr) {
    const resultCallback = callback(arr[i], i);
    resultCallback && newArr.push(arr[i]);
  }

  return newArr;
}

const arrayFilter = filter(array, (i) => i > 4);
console.log(arrayFilter); // [ 5, 6, 7, 8 ]
