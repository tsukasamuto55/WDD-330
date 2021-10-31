import Hikes from "./hike.js";

const hikes = new Hikes("hikes");

window.addEventListener("load", () => {
  hikes.showHikeList();
});
