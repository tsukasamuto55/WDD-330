import writeToLS from "./localStorage.js";
import fetchData, {
  URL,
  keyword,
  searchForm,
  loadList,
  resetValue,
  optionValue,
} from "./newsAPI.js";

let language = document.querySelector("#language");
let sortBy = document.querySelector("#sortBy");

window.addEventListener("load", () => {
  const key = localStorage.getItem("key");
  if (!key) return;

  // fetchData(URL, loadList().key, loadList().sort, loadList().lang);
});

searchForm.addEventListener("submit", (e) => {
  const preference = {
    key: keyword.value,
    lang: optionValue(language),
    sort: optionValue(sortBy),
  };

  e.preventDefault();

  if (keyword.value == "") return;

  // fetchData(
  //   URL,
  //   keyword,
  //   (optionValue(language) = "relevance"),
  //   (optionValue(sortBy) = "en")
  // );
  console.log(optionValue(language), optionValue(sortBy));

  writeToLS("key", JSON.stringify(preference));
  keyword.value = "";
  resetValue(language);
  resetValue(sortBy);
});
