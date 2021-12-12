import writeToLS from "./localStorage.js";
import fetchData, { loadList } from "./newsAPI.js";

const URL = "https://gnews.io/api/v4/";
let language = document.querySelector("#language");
const keyword = document.querySelector("#keyword");
let sortBy = document.querySelector("#sortBy");
const searchForm = document.querySelector(".search-form");

window.addEventListener("load", () => {
  const key = localStorage.getItem("key");
  if (!key) return;

  fetchData(URL, loadList().key, loadList().sort, loadList().lang);
});

searchForm.addEventListener("submit", (e) => {
  const test = {
    key: keyword.value,
    sort: sortBy.value,
    lang: language.value,
  };

  e.preventDefault();

  if (keyword.value == "") return;

  fetchData(URL, keyword, (sortBy = "relevance"), (language = "en"));
  writeToLS("key", JSON.stringify(test));
  keyword.value = "";
  // language.value = "";
});
