const quiz = [
  { name: "Superman", realName: "Clark Kent" },
  { name: "Wonder Woman", realName: "Diana Prince" },
  { name: "Batman", realName: "Bruce Wayne" },
];

const view = {
  score: document.querySelector("#score strong"),
  question: document.getElementById("question"),
  result: document.getElementById("result"),
  info: document.getElementById("info"),
  render(target, content, attributes) {
    for (const key in attributes) {
      target.setAttribute(key, attributes[key]);
    }
    target.innerHTML = content;
  },
};

const game = {
  start(quiz) {
    this.questions = this.score = 0;

    for (const [question, answer] of quiz) {
      const response = ask(question);
      check(response, answer);
    }

    gameOver();
  },

  ask(question) {
    return prompt(question);
  },

  check(response, answer) {
    if (response === answer) {
      alert("Correct");
      score++;
    } else {
      alert(`Wrong! The correct answer was ${answer}`);
    }
  },

  gameOver() {
    alert(`Game Over, you scored ${score} point${score !== 1 ? "s" : ""}`);
  },
};

start(quiz);
