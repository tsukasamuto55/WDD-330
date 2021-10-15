const ul = document.querySelector("ul");
const html = document.querySelector("html");

const links = [
  {
    label: "Week 01",
    url: "week1/index.html",
  },
  {
    label: "Week 02",
    url: "week2/index.html",
  },
  {
    label: "Week 03",
    url: "week3/index.html",
  },
  {
    label: "Week 04",
    url: "week4/index.html",
  },
  {
    label: "Week 05",
    url: "week5/index.html",
  },
];

links.forEach((link) => {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.setAttribute("href", link.url);
  anchor.innerHTML = link.label;
  li.append(anchor);
  ul.append(li);
});
