var func = function passAsArg(value, callback) {
  return callback(value);
};

func("value", console.log);

/**
 * ------------------------------------------------
 * **/

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

function calculator(operation, a, b) {
  return operation(a, b);
}

const result1 = calculator(add, 5, 3); // result1 will be 8
const result2 = calculator(subtract, 10, 4); // result2 will be 6

/**
 * ------------------------------------------------
 * **/

function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

const result3 = double(5); // result3 will be 10
const result4 = triple(4); // result4 will be 12
