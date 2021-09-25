function addNumbers(num) {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
}

// function addNumbers(num) {
//   if (num <= 0) return num;
//   return num + addNumbers(num - 1);
// }

const userInput1 = document.querySelector("#input1");
const userInput2 = document.querySelector("#input2");
const btn = document.querySelector("button");
const output = document.querySelector("#output");
const output2 = document.querySelector("#output2");
const num1 = parseFloat(userInput1.value);
const num2 = parseFloat(userInput2.value);

btn.addEventListener("click", addNumbers);

function summation(num, total = 0) {
  if (num <= 0) return total;
  return summation(num - 1, total + num);
}

const subtractNumbers = function (num1, num2) {
  return num1 - num2;
};

function outputAllFunc(func1, func2, func3) {
  output.innerText = `Summation of nums is: ${func1}, substract nums is: ${func2}, add nums is ${func3}.`;
}

function addNumbers() {
  const num1 = parseFloat(userInput1.value);
  const num2 = parseFloat(userInput2.value);

  return (output.innerText = num1 + num2);
}
