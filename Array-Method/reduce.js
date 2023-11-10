const array = [1, 2, 3];

const initialValue = 10;

const arrayReduce = array.reduce((accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
}, initialValue);
console.log(arrayReduce);

// https://ditty.ir/posts/javascript-reduce-method/XolQJ
