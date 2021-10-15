import onTouch from "./utilities.js";
import writeToLS from "./ls.js";
import timestamp from "./timestamp.js";

// export default class Todos {
// constructor()
// }
const LIST_STORAGE_KEY = `Todo_List`;
const inputTodo = document.querySelector(".todo-input");   
export function saveTodo() {
  writeToLS(
    LIST_STORAGE_KEY,
    JSON.stringify({
      id: timestamp(),
      content: inputTodo.value,
      completed: false,
    })
  );
}
