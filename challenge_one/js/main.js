import * as todo from "./Todos.js";
import onTouch from "./utilities.js";

window.addEventListener("load", () => {
  let listItems = todo.loadList();

  listItems.forEach((listItem) => {
    todo.renderList(listItem);
    todo.displayTaskAmount();
  }); // I can shorthand this code: listItems.forEach(renderList)
});

todo.changeEvent();
onTouch(todo.list, todo.deleteEvent);
onTouch(todo.form, todo.addEvent);
onTouch(todo.allBtn, todo.allBtnEvent);
onTouch(todo.activeBtn, todo.activeBtnEvent);
onTouch(todo.completeBtn, todo.completeBtnEvent);
