const token = "80786e58dc1c8cb0cc8f96aed97419fd";
const newsList = document.querySelector("#news-list");
const showMoreBtn = document.querySelector(".show-more-btn");
export const URL = "https://gnews.io/api/v4/";
export const keyword = document.querySelector("#keyword");
export const searchForm = document.querySelector(".search-form");
export const errorMessage = document.querySelector(".error");

export default function fetchData(URL, keyword, language, sortBy) {
  if (keyword.value == undefined) {
    fetch(
      `${URL}search?q=${keyword}&lang=${language.value}&sortby=${sortBy.value}&token=${token}`
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
      `${URL}search?q=${keyword.value}&lang=${language.value}&sortby=${sortBy.value}&token=${token}`
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

export function loadList() {
  const listString = localStorage.getItem("key");
  return JSON.parse(listString) || [];
}

export function resetValue(selectOption) {
  selectOption.selectedIndex = 0;
}

export function optionValue(selectOption) {
  return selectOption.options[selectOption.selectedIndex].value;
}
