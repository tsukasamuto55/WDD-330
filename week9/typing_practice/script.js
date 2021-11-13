// This is based on the tutorial from https://www.youtube.com/watch?v=R-7eQIHRszQ. I added some features to the tutorial such displaying time elapse, word count, etc.

const RANDOM_QUOTE_URL = "https://api.quotable.io/random";
const quoteDisplayElement = document.getElementById("quote-display");
const quoteInputElement = document.getElementById("quote-input");
const timerElement = document.getElementById("timer");
const timeElapsed = document.querySelector("#time-elapsed");
const wordCounts = document.querySelector("#word-counts");
const wordPerMinute = document.querySelector("#word-per-minute");
// const highScore = document.querySelector(".high-score");
// const html = document.querySelector("html");
// const darkBtn = document.querySelector(".dark-btn");
// const lightBtn = document.querySelector(".light-btn");

// darkBtn.addEventListener("click", () => {
//   html.classList.add("dark-mode");
//   darkBtn.style.display = "none";
//   lightBtn.style.display = "block";
// });

// lightBtn.addEventListener("click", () => {
//   html.classList.remove("dark-mode");
//   darkBtn.style.display = "block";
//   lightBtn.style.display = "none";
// });

quoteInputElement.addEventListener("input", () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll("span");
  const arrayValue = quoteInputElement.value.split("");

  let wordCount = 0;
  let split = quoteInputElement.value.split(" ");
  split.forEach((word) => {
    if (word !== "") wordCount += 1;
    console.log(word);
  });

  let correct = true;
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];
    if (character == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.add("incorrect");
      characterSpan.classList.remove("correct");
      correct = false;
    }
  });

  // let highScores = [];
  if (correct) {
    const wpm = wordCount / (getTimerTime() / 60);

    timeElapsed.innerText = `Time elapsed: ${getTimerTime()} seconds`;
    wordCounts.innerText = `Word counts: ${wordCount} words`;
    wordPerMinute.innerText = `Typing speed: ${Math.round(wpm, 0)} wpm`;
    timerElement.innerText = `Your typing speed is ${Math.round(wpm, 0)} WPM!`;

    // highScores.push(localStorage.setItem("highScore", Math.round(wpm, 0)));

    // highScore.innerText = `High Score: ${localStorage.getItem("highScore")}`;

    clearInterval(interval);

    renderNewQuote();
  }
});

// function getRandomQuote() {
//   return fetch("https://dad-jokes.p.rapidapi.com/random/joke/", {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
//       "x-rapidapi-key": "a7aff8d230msh02dea13549cf68cp18fa17jsnd47e320a5c76",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       const joke = data.body[0];
//       return joke.setup + " " + joke.punchline;
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }

function getRandomQuote() {
  return fetch(RANDOM_QUOTE_URL)
    .then((response) => response.json())
    .then((data) => data.content);
}

async function renderNewQuote() {
  const quote = await getRandomQuote();
  quoteDisplayElement.innerText = "";
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan);
  });
  quoteInputElement.value = null;

  quoteInputElement.addEventListener("input", oneTimeEvent);
}

// Prevent event listener firing each time input occurs.
function oneTimeEvent() {
  startTimer();
  eraseResults();

  quoteInputElement.removeEventListener("input", oneTimeEvent);
}

function eraseResults() {
  timeElapsed.innerText = "";
  wordCounts.innerText = "";
  wordPerMinute.innerText = "";
}

let startTime;
// To save setInterval into the variable "interval" to clear setInterval when each word matches.
let interval;

function startTimer() {
  timerElement.innerText = 0;
  startTime = new Date();
  interval = setInterval(() => {
    timerElement.innerText = getTimerTime();
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}

renderNewQuote();
