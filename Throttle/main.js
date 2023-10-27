const counterBtn = document.getElementById("button");
const countEl = document.getElementById("count");
let countNum = 0;

function throttle(fn, delay) {
  let lastInvoke = null;
  return (...args) => {
    if (lastInvoke + delay < Date.now()) {
      lastInvoke = Date.now();
      fn(...args);
    }
  };
}
countEl.innerText = countNum;
counterBtn.onclick = throttle(() => {
  countNum++;
  countEl.innerText = countNum;
}, 2000);
