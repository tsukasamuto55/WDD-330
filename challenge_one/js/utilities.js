export default function onTouch(elementSelector, callback) {
  if ("ontouchend" in document.documentElement === true) {
    return elementSelector.addEventListener("touchend", callback);
  } else return elementSelector.addEventListener("click", callback);
}
