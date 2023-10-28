const button = document.getElementById("button");
const countEl = document.getElementById("count");
let countNum = 0;

function debounce(fn, delay) {
  let timeout = null;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

countEl.innerText = countNum;
button.onclick = debounce(() => {
  countNum++;
  countEl.innerText = countNum;
}, 1000);
