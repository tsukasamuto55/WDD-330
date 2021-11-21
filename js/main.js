const blockOneUl = document.querySelector(".block1");
const blockTwoUl = document.querySelector(".block2");

const linksOne = [
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
  {
    label: "Week 06",
    url: "week6/index.html",
  },
];

const linksTwo = [
  {
    label: "Week 07",
    url: "week7/index.html",
  },
  {
    label: "Week 08",
    url: "week8/index.html",
  },
  {
    label: "Week 09",
    url: "week9/index.html",
  },
  {
    label: "Week 10",
    url: "week10/index.html",
  },
];

createLists(blockOneUl, linksOne);
createLists(blockTwoUl, linksTwo);

function createLists(ul, links) {
  links.forEach((link) => {
    console.log(ul);
    console.log(links);
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.setAttribute("href", link.url);
    anchor.innerHTML = link.label;
    li.append(anchor);
    ul.append(li);
  });
}
