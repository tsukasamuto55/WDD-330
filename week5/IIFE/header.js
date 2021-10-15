const headerModule = (() => {
  let counter = 0;

  return {
    countUp() {
      counter += 1;
      console.log(`The current count is ${counter} in header`);
    },
    selectMenu() {
      console.log("Menu button is clicked");
    },
  };
})(); // Parenthesis is required to invoke this function immediately. I still need to call a method whenever I want to use it.

const headerCountBtn = document.querySelector("[data-header-count-up]");
const headerMenuBtn = document.querySelector("[data-menu-btn]");

headerCountBtn.addEventListener("click", () => {
  headerModule.countUp();
});

headerMenuBtn.addEventListener("click", () => {
  headerModule.selectMenu();
});
