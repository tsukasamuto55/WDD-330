import writeToLS from "./localStorage.js";

const token = "80786e58dc1c8cb0cc8f96aed97419fd";
const URL = "https://gnews.io/api/v4/";
const newsList = document.querySelector("#news-list");
const keyword = document.querySelector("#keyword");
const searchForm = document.querySelector(".search-form");
const language = document.querySelector("#language");
const showMoreBtn = document.querySelector(".show-more-btn");

window.addEventListener("load", () => {
  const key = localStorage.getItem("key");
  if (!key) return;

  fetchData(URL, key);
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchData(URL, keyword);

  writeToLS("key", keyword.value);
  keyword.value = "";
  language.value = "";
});

function fetchData(URL, keyword) {
  if (keyword.value == undefined) {
    fetch(`${URL}search?q=${keyword}&lang=${language.value}&token=${token}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const newsData = data.articles;
        renderNewsArticles(newsData);
      });
  } else if (language.value == "") {
    fetch(`${URL}search?q=${keyword.value}&lang=en&token=${token}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const newsData = data.articles;
        renderNewsArticles(newsData);
      });
  } else {
    fetch(`${URL}search?q=${keyword.value}&lang=${language.value}&token=${token}`)
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
    <a href="${newsData.content.url}">
      <img class="news-img" src="${newsData.image}">
      <h2 class="news-title">${newsData.title}</h2>
      <div class="news-content">${newsData.content}</div>
    </a>
</div>`;
    return newsArticle;
  } else {
    newsArticle.innerHTML = `<div class="news-card">
    <a href="${newsData.url}">
      <img class="news-img" src="${newsData.image}">
      <h2 class="news-title">${newsData.title}</h2>
      <div class="news-content">${newsData.content}</div>
    </a>
</div>`;
    return newsArticle;
  }
}

// export { fetchData };
