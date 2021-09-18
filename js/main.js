const ol = document.querySelector("ol");

const links = [
  {
    label: "Week1 work",
    url: "week1/index.html",
  },
  {
    label: "Week2 work",
    url: "week2/index.html",
  },
];

links.forEach((link) => {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.setAttribute("href", link.url);
  anchor.innerHTML = link.label;
  li.append(anchor);
  ol.append(li);
});
