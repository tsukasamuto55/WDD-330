import writeToLS from "./localStorage.js";
import fetchData, { URL, keyword, searchForm, loadList, resetValue } from "./newsAPI.js";

let language = document.querySelector("#language");
let sortBy = document.querySelector("#sortBy");

window.addEventListener("load", () => {
  const key = localStorage.getItem("key");
  if (!key) return;

  fetchData(URL, loadList().key, loadList().sort, loadList().lang);
});

searchForm.addEventListener("submit", (e) => {
  const preference = {
    key: keyword.value,
    lang: language.options[language.selectedIndex].value,
    sort: sortBy.options[sortBy.selectedIndex].value,
  };

  e.preventDefault();

  if (keyword.value == "") return;

  fetchData(
    URL,
    keyword,
    (sortBy.options[sortBy.selectedIndex].value = "relevance"),
    (language.options[language.selectedIndex].value = "en")
  );
  writeToLS("key", JSON.stringify(preference));
  keyword.value = "";
  resetValue(language);
  resetValue(sortBy);
});
