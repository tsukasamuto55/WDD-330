const URL = "https://gnews.io/api/v4/";
const token = "80786e58dc1c8cb0cc8f96aed97419fd";
const keyword = document.querySelector("#keyword");
const searchForm = document.querySelector(".search-form");

function fetchData(URL) {
  fetch(`${URL}search?q=${keyword.value}&token=${token}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  fetchData(URL);
});

function renderNews(news) {
  const templateClone = template.content.cloneNode(true);
  const listItem = templateClone.querySelector(".list-item");
  listItem.dataset.listItemId = listName.id;

  const textElement = templateClone.querySelector(".list-item-text");
  textElement.innerText = listName.content;

  const checkbox = templateClone.querySelector(".list-item-checkbox");
  // This will keep the checkbox checked even after refreshing the page
  checkbox.checked = listName.completed;

  list.append(templateClone);
}
