const toggleBtn = document.querySelector(".dark-btn");

toggleBtn.addEventListener("click", () => {
  if (html.classList != "dark-mode") {
    html.classList.toggle("dark-mode");
    toggleBtn.innerText = "Light Mode";
  } else {
    html.classList.toggle("dark-mode");
    toggleBtn.innerText = "Dark Mode";
  }
});
