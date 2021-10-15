import { saveTodo } from "./Todos.js";
import onTouch from "./utilities.js";

const addBtn = document.querySelector(".add-btn");

onTouch(addBtn, () => {
  saveTodo();
  inputTodo.value = "";
});
