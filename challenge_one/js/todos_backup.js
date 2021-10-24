import writeToLS from "./ls.js";
import timestamp from "./timestamp.js";

//********** DOM selectors ***********//
const form = document.querySelector("#new-todo-form");
const LIST_STORAGE_KEY = `Todo_List`;
const inputTodo = document.querySelector(".todo-input");
const template = document.querySelector("#list-item-template");
const list = document.querySelector("ul");
const allBtn = document.querySelector(".all-btn");
const activeBtn = document.querySelector(".active-btn");
const completeBtn = document.querySelector(".complete-btn");

//********** events ***********//
let listItems = loadList();
listItems.forEach((listItem) => {
  renderList(listItem);
  displayTaskAmount();
}); // I can shorthand this code: listItems.forEach(renderList)

list.addEventListener("change", (e) => {
  if (!e.target.matches(".list-item-checkbox")) return;

  const parentEle = e.target.closest(".list-item");
  const listItemId = parentEle.dataset.listItemId;
  const listItem = listItems.find((item) => item.id === listItemId);

  listItem.completed = e.target.checked;
  saveList();
});

list.addEventListener("click", (e) => {
  if (!e.target.matches(".delete-btn")) return;

  const parentEle = e.target.closest(".list-item");
  const listItemId = parentEle.dataset.listItemId;
  parentEle.remove();

  listItems = listItems.filter((listItem) => listItem.id !== listItemId);
  displayTaskAmount();
  saveList();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const listName = inputTodo.value;
  if (listName === "") return;

  const newListItem = {
    id: timestamp().toString(),
    content: listName,
    completed: false,
  };
  listItems.push(newListItem);

  renderList(newListItem);
  displayTaskAmount();
  saveList();

  inputTodo.value = "";
});

allBtn.addEventListener("click", () => {
  removeTasks();
  listItems.forEach(renderList);
});

activeBtn.addEventListener("click", () => {
  const incompleteList = listItems.filter((listItem) => !listItem.completed);
  removeTasks();
  incompleteList.forEach((list) => renderList(list));
});

completeBtn.addEventListener("click", () => {
  const completedList = listItems.filter((listItem) => listItem.completed);
  removeTasks();
  completedList.forEach((list) => renderList(list));
});

//********** functions ***********//
function saveList() {
  writeToLS(LIST_STORAGE_KEY, JSON.stringify(listItems));
}

function loadList() {
  const listString = localStorage.getItem(LIST_STORAGE_KEY);
  return JSON.parse(listString) || [];
}

function renderList(listName) {
  const templateClone = template.content.cloneNode(true);
  const listItem = templateClone.querySelector(".list-item");
  listItem.dataset.listItemId = listName.id;

  const textElement = templateClone.querySelector(".list-item-text");
  textElement.innerText = listName.content;

  const checkbox = templateClone.querySelector(".list-item-checkbox");
  // This will keep the checkbox checked even after refreshing the page
  checkbox.checked = listName.completed;

  list.append(templateClone);
}

function displayTaskAmount() {
  const taskAmount = document.querySelector(".task-amount");
  taskAmount.innerHTML = listItems.length;
}

function removeTasks() {
  Array.from(list.children).forEach((ele) => {
    ele.remove();
  });
}

// Utilize window.confirm("Would you like to delete this task?") to ask a user if the user wants to delete a task or not.
