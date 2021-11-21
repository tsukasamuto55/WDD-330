const URL = "https://gnews.io/api/v4/";
const token = "80786e58dc1c8cb0cc8f96aed97419fd";
const keyword = document.querySelector("#keyword");
const searchForm = document.querySelector(".search-form");
const newsContainer = document.querySelector(".news-container");

function fetchData(URL) {
  fetch(`${URL}search?q=${keyword.value}&token=${token}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const newsData = data.articles;
      renderNews(newsData);
    });
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchData(URL);
});

function renderNews(newsData) {
  newsData.forEach((news) => {
    const newsCard = document.createElement("div");
    newsCard.classList.add("news-card");

    const newsLink = document.createElement("a");
    newsLink.setAttribute("href", news.url);

    const newsImg = document.createElement("img");
    newsImg.classList.add("news-img");
    newsImg.setAttribute("src", news.image);

    const newsTitle = document.createElement("h2");
    newsTitle.classList.add("news-title");
    newsTitle.innerHTML = news.title;

    const newsContent = document.createElement("div");
    newsContent.classList.add("news-content");
    newsContent.innerHTML = news.content;

    newsCard.append(newsLink, newsImg, newsTitle, newsContent);
    newsContainer.append(newsCard);
  });
}

// function renderNews(news) {
//   const templateClone = template.content.cloneNode(true);
//   const listItem = templateClone.querySelector(".list-item");
//   listItem.dataset.listItemId = listName.id;

//   const textElement = templateClone.querySelector(".list-item-text");
//   textElement.innerText = listName.content;

//   const checkbox = templateClone.querySelector(".list-item-checkbox");
//   // This will keep the checkbox checked even after refreshing the page
//   checkbox.checked = listName.completed;

//   list.append(templateClone);
// }
