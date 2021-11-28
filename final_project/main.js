import writeToLS from "./localStorage.js";
import { fetchData } from "./newsAPI.js";

const URL = "https://gnews.io/api/v4/";

const keyword = document.querySelector("#keyword");
const searchForm = document.querySelector(".search-form");

window.addEventListener("load", () => {
  const key = localStorage.getItem("key");
  if (!key) return;

  console.log(key);
  fetchData(URL, key);
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchData(URL, keyword);
  writeToLS("key", keyword.value);
});
