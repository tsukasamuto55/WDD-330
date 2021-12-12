import writeToLS from "./localStorage.js";

const token = "80786e58dc1c8cb0cc8f96aed97419fd";
const newsList = document.querySelector("#news-list");
const showMoreBtn = document.querySelector(".show-more-btn");

export default function fetchData(URL, keyword, sortBy, language) {
  if (keyword.value == undefined) {
    fetch(
      `${URL}search?q=${keyword}&sortby=${sortBy.value}&lang=${language.value}&token=${token}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const newsData = data.articles;
        renderNewsArticles(newsData);
      });
  } else {
    fetch(
      `${URL}search?q=${keyword.value}&sortby=${sortBy.value}&lang=${language.value}&token=${token}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const newsData = data.articles;
        renderNewsArticles(newsData);
      });
  }
}

function renderNewsArticles(newsArticles) {
  newsList.innerHTML = "";
  for (let i = 0; i <= 4; i++) {
    newsList.append(renderOneNews(newsArticles[i]));
  }
  showMoreBtn.classList.remove("hide");
  showMoreNews(newsArticles);
}

function showMoreNews(newsArticles) {
  showMoreBtn.addEventListener("click", () => {
    newsList.innerHTML = "";
    renderNewsArticles(newsArticles);
    for (let i = 5; i <= 9; i++) {
      newsList.append(renderOneNews(newsArticles[i]));
    }
    showMoreBtn.classList.add("hide");
  });
}

function renderOneNews(newsData) {
  const newsArticle = document.createElement("li");
  if (newsData.url == undefined) {
    newsArticle.innerHTML = `<div class="news-card">
      <img class="news-img" src="${newsData.image}">
      <div class="news-article">
        <div class="news-date">${newsData.publishedAt.slice(0, 10)}</div>
        <a href="${newsData.content.url}">
          <h2 class="news-title">${newsData.title}</h2>
          <div class="news-content">${newsData.content}</div>
        </a>
      </div>
    </div>`;
    return newsArticle;
  } else {
    newsArticle.innerHTML = `<div class="news-card">
      <img class="news-img" src="${newsData.image}">
      <div class="news-article">
        <div class="news-date">${newsData.publishedAt.slice(0, 10)}</div>
        <a class="news-link" href="${newsData.url}">
          <h2 class="news-title">${newsData.title}</h2>
          <div class="news-content">${newsData.content}</div>
        </a>
      </div>
    </div>`;
    return newsArticle;
  }
}

export function loadList() {
  const listString = localStorage.getItem("key");
  return JSON.parse(listString) || [];
}
