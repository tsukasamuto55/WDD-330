const userInput1 = document.querySelector("#input1");
const btn = document.querySelector("button");
const output = document.querySelector("#output");

btn.addEventListener("click", () => {
  return (output.innerHTML = userInput1.value);
});
