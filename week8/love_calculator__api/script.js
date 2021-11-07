const fname = document.querySelector(".fname");
const sname = document.querySelector(".sname");
const output = document.querySelector(".output")
const submitBtn = document.querySelector("button")

submitBtn.addEventListener("click", fetchData)

function fetchData() {
	fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname.value.toLowerCase()}&sname=${sname.value.toLowerCase()}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "love-calculator.p.rapidapi.com",
			"x-rapidapi-key": "df36dc0a89msh0377cd8c9dd009bp1a93e0jsnfb8b77828c49"
		}
	})
	.then(response => {
		return response.json();
	})
	.catch(err => {
		console.error(err);
	})
	.then(data => {
		output.innerHTML = `<div>The percentage of successful relationship between ${fname.value} and ${sname.value} is ${data.percentage}%.
		<br><br>
		The result is ${data.result}.
		</div>`
	})
}