const ul = document.querySelector("ul");

const links = [
  {
    label: "Week 01",
    url: "week1/index.html",
  },
  {
    label: "Week 02",
    url: "week2/index.html",
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
