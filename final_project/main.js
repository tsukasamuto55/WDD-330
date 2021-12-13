import writeToLS from "./localStorage.js";
import fetchData, {
  URL,
  keyword,
  searchForm,
  errorMessage,
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

  if (keyword.value == "" || optionValue(language) == "" || optionValue(sortBy) == "") {
    errorMessage.classList.remove("hide");
    return;
  } else {
    errorMessage.classList.add("hide");

    // fetchData(URL, keyword, optionValue(language), optionValue(sortBy));
    writeToLS("key", JSON.stringify(preference));

    keyword.value = "";
    resetValue(language);
    resetValue(sortBy);
  }
});
