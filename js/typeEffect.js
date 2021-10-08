const title = document.querySelector(".title");
const strings = "Hello, my name is Tsukasa Muto";
const strings2 = "I'm a passionate Front End Developer";
const splitStrings = strings.split("");
const splitStrings2 = strings2.split("");
let content = "";

setTimeout(() => {
  const typingAnimation = setInterval(() => {
    title.innerText = content += splitStrings.shift();

    if (splitStrings == "") {
      clearInterval(typingAnimation);
    }
  }, 175);
}, 1000);
