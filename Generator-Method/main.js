function* log(accessReturn) {
  yield 1;
  yield 2;
  if (accessReturn) {
    return 404;
  }
  yield 3;
  yield 4;
}

const logger = log();

const firstLogger = logger.next();
const secondLogger = logger.next();
const thirdLogger = logger.next();
const fourthLogger = logger.next();

console.log(firstLogger);
console.log(secondLogger);
console.log(thirdLogger);
console.log(fourthLogger);

console.log("-----------------------------");

const loggerFor = log();

for (num of loggerFor) {
  console.log(num);
}

console.log("-----------------------------");

const trueLogger = log(true);

const trueFirstLogger = trueLogger.next();
const trueSecondLogger = trueLogger.next();
const trueThirdLogger = trueLogger.next();
const trueFourthLogger = trueLogger.next();

console.log(trueFirstLogger);
console.log(trueSecondLogger);
console.log(trueThirdLogger);
console.log(trueFourthLogger);

console.log("-----------------------------");

const forTrueLogger = log(true);

for (num of forTrueLogger) {
  console.log(num);
}

console.log("-----------------------------");

console.log([...log()]);
