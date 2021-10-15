const footerModule = (() => {
  let counter = 0;

  return {
    countUp() {
      counter += 1;
      console.log(`The current count is ${counter} in footer`);
    },
    selectMenu() {
      console.log("Menu button is clicked");
    },
  };
})(); // Parenthesis is required to invoke this function immediately. I still need to call a method whenever I want to use it.

const footerCountBtn = document.querySelector("[data-footer-count-up]");

footerCountBtn.addEventListener("click", () => {
  footerModule.countUp();
});
