const URL = "https://jsonplaceholder.typicode.com/comments?postId=1";

async function fetchURL() {
  const response = await fetch(URL);
  const comments = await response.json();

  comments.map((comment) => console.log(comment.body));
}

fetchURL();
