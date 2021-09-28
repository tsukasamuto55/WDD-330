const editBtn = document.querySelector(".edit-btn");
const saveBtn = document.querySelector(".save-btn");
const displayBtn = document.querySelector(".display-btn");
const textInput = document.querySelector("#story_editor");
const displayText = document.querySelector("#story_display");

saveBtn.addEventListener("click", () => {
  let storyName = document.querySelector("#name").value;
  localStorage.setItem(storyName, textInput.value);
  eraseInputs();
});

editBtn.addEventListener("click", () => {
  const storyName = document.querySelector("#name").value;
  textInput.value = localStorage.getItem(storyName);
  displayText.innerHTML = "";
});

displayBtn.addEventListener("click", () => {
  displayText.innerHTML = textInput.value;
});

function eraseInputs() {
  document.querySelector("#name").value = "";
  document.querySelector("#story_editor").value = "";
  displayText.innerHTML = "";
}
