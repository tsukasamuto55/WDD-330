const ul = document.querySelector(".list");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modal-content")
const closeBtn = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");



closeBtn.addEventListener("click", closeAlerts);
overlay.addEventListener("click", closeAlerts);

function openModal() {
  modal.classList.add("open");
  overlay.classList.add("open");
}

function closeAlerts() {
  modal.classList.remove("open");
  overlay.classList.remove("open");
}

document.addEventListener("keydown", (event) => {
  if (event.code == "Escape" || event.code == "Enter") {
  closeAlerts()
  }
});

function fetchURL(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function renderList(items) {
  ul.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");

    li.innerHTML = `<h2><a href=${item.url}>${item.name.toLowerCase()}</a></h2>`;
    li.addEventListener("click", (e) => {
      e.preventDefault();
      renderListDetails(item);
    });
    ul.append(li);
  });
}

function renderListDetails(data) {
  // need to write codes to show details of a data. Refer to Hike activity
  modalContent.innerHTML = ""
  const li = document.createElement("li");
  li.classList.add("character-detail")
  li.innerHTML = ''
  openModal()
 
  li.innerHTML = 
  `<h3>name: ${data.name.toLowerCase()}</h3>
   <div>height: ${data.height.toLowerCase()} cm</div>
   <div>weight: ${data.mass.toLowerCase()} kgs</div>
   <div>hair color: ${data.hair_color.toLowerCase()}</div>
   <div>skin color: ${data.skin_color.toLowerCase()}</div>
   <div>eye color: ${data.eye_color.toLowerCase()}</div>
   <div>birth year: ${data.birth_year.toLowerCase()}</div>
   <div>gender: ${data.gender.toLowerCase()}</div>
  `
  modalContent.append(li)
}

function showInfo(url = "https://swapi.dev/api/people/") {
  fetchURL(url).then(function (data) {
    const results = data.results;
    renderList(results);

    if (data.next) {
      nextBtn.onclick = () => {
        showInfo(data.next);
      };
    }

    if (data.previous) {
      prevBtn.onclick = () => {
        showInfo(data.previous);
      };
    }
  });
}

showInfo();
