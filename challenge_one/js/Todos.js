import timestamp from "./timestamp.js";
import writeToLS from "./ls.js";

//********** DOM selectors ***********//
export const form = document.querySelector("#new-todo-form");
const LIST_STORAGE_KEY = `Todo_List`;
const inputTodo = document.querySelector(".todo-input");
const template = document.querySelector("#list-item-template");
export const list = document.querySelector("ul");
export const allBtn = document.querySelector(".all-btn");
export const activeBtn = document.querySelector(".active-btn");
export const completeBtn = document.querySelector(".complete-btn");

let listItems = loadList();
//********** events ***********//

export function changeEvent() {
  list.addEventListener("change", (e) => {
    if (!e.target.matches(".list-item-checkbox")) return;

    const parentEle = e.target.closest(".list-item");
    const listItemId = parentEle.dataset.listItemId;
    let listItem = listItems.find((item) => item.id === listItemId);

    listItem.completed = e.target.checked;

    saveList();
  });
}

export const deleteEvent = list.addEventListener("click", (e) => {
  if (!e.target.matches(".delete-btn")) return;

  const parentEle = e.target.closest(".list-item");
  const listItemId = parentEle.dataset.listItemId;
  parentEle.remove();

  listItems = listItems.filter((listItem) => listItem.id !== listItemId);
  displayTaskAmount();
  saveList();
});

export const addEvent = form.addEventListener("submit", (e) => {
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

export const allBtnEvent = allBtn.addEventListener("click", () => {
  removeTasks();
  listItems.forEach(renderList);
  displayTaskAmount();
});

export const activeBtnEvent = activeBtn.addEventListener("click", () => {
  const incompleteList = listItems.filter((listItem) => !listItem.completed);
  removeTasks();
  incompleteList.forEach((list) => renderList(list));
  displayTaskAmount();
});

export const completeBtnEvent = completeBtn.addEventListener("click", () => {
  const completedList = listItems.filter((listItem) => listItem.completed);
  removeTasks();
  completedList.forEach((list) => renderList(list));
  displayTaskAmount();
});

//********** functions ***********//

export function loadList() {
  const listString = localStorage.getItem(LIST_STORAGE_KEY);
  return JSON.parse(listString) || [];
}

export function renderList(listName) {
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

function removeTasks() {
  Array.from(list.children).forEach((ele) => {
    ele.remove();
  });
}

function saveList() {
  writeToLS(LIST_STORAGE_KEY, JSON.stringify(listItems));
}

export function displayTaskAmount() {
  const taskAmount = document.querySelector(".task-amount");
  taskAmount.innerHTML = listItems.length;
}
