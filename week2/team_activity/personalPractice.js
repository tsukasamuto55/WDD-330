// function addNumbers(num) {
//   let total = 0;
//   for (let i = 0; i <= num; i++) {
//     total += i;
//   }
//   return total;
// }

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

btn.addEventListener("click", () => {
  output.innerText = summation(parseFloat(userInput1.value));
});
// function summation(num, total = 0) {
//   if (num <= 0) return total;
//   return summation(num - 1, total + num);
// }

function summation(num, total = 0) {
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
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

// Eloquent JavaScript Chapter 4 Code exercises
function range(start, end, step) {
  let arr = [];
  if (start > end) {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i < end; i += step) {
      arr.push(i);
    }
  }
  console.log(arr);
}

// range(5, 2, -1);

// function sumOfArray(arr) {
//   let total = 0;
//   arr.forEach((num) => {
//     total += num;
//   });
//   return total;
// }

// console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function reverseArray(str) {
//   return str.reverse();
// }

// function reverseArray(arr) {
//   let newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(reverseArray([1, 2, 3, 4, 5, 6]));
// console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5, 6];

function reverseArrayInPlace(array) {
  for (let i = 0; i < 3; i++) {
    console.log(array[i], array[array.length - 1 - i]);
    // array.splice(array[i], 1, array[array.length - 1 - i]);
  }
  return array;
}

reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// Functions as Arguments from Udemy Colt JavaScript course 94.
// function makeBetweenFunc(x, y) {
//   return function (num) {
//     return num >= x && num < y;
//   };
// }

// const isChild = makeBetweenFunc(0, 18);

// const isNineties = makeBetweenFunc(1990, 2000);

// console.log(isNineties(1912));

// const test = setInterval(() => {
//   console.log("This is a test");
// }, 1000);

// clearInterval(test);

// const test1 = [1, 2, 3, 4, 5, 6];

// console.log(Math.max(...test1));
