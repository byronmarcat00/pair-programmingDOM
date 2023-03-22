let inputnumber = document.getElementById("input");
let button = document.getElementById("button");
let result = document.getElementById("number");

function generateNumber() {
  let range = inputnumber.value;
  if (range === "0") {
    return "erroorrrr";
  }
  let random_number = Math.floor(Math.random() * range) + 1;

  result.textContent = random_number;
}

button.addEventListener("click", generateNumber);
