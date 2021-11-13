window.addEventListener("keydown", (e) => {
  let y = 50;
  const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key = '${e.keyCode}']`);
  y += 10;
  key.style.top = y + "px";

  if (!audio) return; // stops right here and will exit the function. Any code below will not be executed if there is no audio info.

  audio.currentTime = 0;
  audio.play();
  key.classList.add("move");
  key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
