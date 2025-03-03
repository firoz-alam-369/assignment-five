const cardsNumber = document.getElementById("cardsNumber");
const cardNumberAdd = document.getElementById("cardNumberAdd");
const cardContainer = document.querySelectorAll("#cardContainer");
const addMessages = document.getElementById("addParagraph");

const cardTOne = document.getElementById("cardTitleOne");
const cardTTwo = document.getElementById("cardTitleTwo");
const cardTThree = document.getElementById("cardTitleThree");
const cardTFour = document.getElementById("cardTitleFour");
const cardTFive = document.getElementById("cardTitleFive");
const cardTSix = document.getElementById("cardTitleSix");

console.log(cardTOne);
const cardTOneText = cardTOne.innerHTML;
const cardTTwoText = cardTOne.innerHTML;
const cardTThreeText = cardTOne.innerHTML;
const cardTFourText = cardTOne.innerHTML;
const cardTFiveText = cardTOne.innerHTML;
const cardTSixText = cardTOne.innerHTML;
console.log(cardTOneText);

const buttonOne = document.getElementById("btn-one");
const buttonTwo = document.getElementById("btn-two");
const buttonThree = document.getElementById("btn-three");
const buttonFour = document.getElementById("btn-four");
const buttonFive = document.getElementById("btn-five");
const buttonSix = document.getElementById("btn-six");
const btnClearHistory = document.getElementById("btn-clear");
const colorBtn = document.getElementById("colorButton");

const date = document.getElementById("date");
const week = document.getElementById("week");

let timeString = "";
// current date and time
function displayCurrentDateTime() {
  var now = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var dayName = days[now.getDay()];
  var monthName = months[now.getMonth()];
  var day = now.getDate();
  var year = now.getFullYear();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  var weekDay = dayName;
  var dateString = monthName + " " + day + ", " + year;
  timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;
  date.innerHTML = dateString;
  week.innerHTML = weekDay;
}

displayCurrentDateTime(); // Initial call to display date and time immediately

let cardTotalValue = cardsNumber.innerHTML;
let cardTotalValueIncrease = cardNumberAdd.innerHTML;
console.log(cardTotalValueIncrease);
console.log(cardTotalValue);

buttonOne.addEventListener("click", function (e) {
  if (cardTotalValue == 1) {
    alert("You have completed all tasks!");
  } else {
    alert("Board Update Successfully!");
  }

  cardTotalValue--;
  cardTotalValueIncrease++;
  cardsNumber.innerHTML = cardTotalValue;
  cardNumberAdd.innerHTML = cardTotalValueIncrease;
  buttonOne.style.backgroundColor = "gray";
  buttonOne.style.cursor = "default";
  buttonOne.style.pointerEvents = "none";

  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "new-div");
  let newElement = document.createElement("h6");
  newElement.innerText = `You have completed the task ${cardTOneText} at ${timeString}`;
  newDiv.appendChild(newElement);
  addMessages.appendChild(newElement);
});
buttonTwo.addEventListener("click", function (e) {
  if (cardTotalValue == 1) {
    alert("You have completed all tasks!");
  } else {
    alert("Board Update Successfully!");
  }
  cardTotalValue--;
  cardTotalValueIncrease++;
  cardsNumber.innerHTML = cardTotalValue;
  cardNumberAdd.innerHTML = cardTotalValueIncrease;
  buttonTwo.style.backgroundColor = "gray";
  buttonTwo.style.cursor = "default";
  buttonTwo.style.pointerEvents = "none";

  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "new-div");
  let newElement = document.createElement("h6");
  newElement.innerText = `You have completed the task ${cardTTwoText} at ${timeString}`;
  newDiv.appendChild(newElement);
  addMessages.appendChild(newElement);
});
buttonThree.addEventListener("click", function (e) {
  if (cardTotalValue == 1) {
    alert("You have completed all tasks!");
  } else {
    alert("Board Update Successfully!");
  }
  cardTotalValue--;
  cardTotalValueIncrease++;
  cardsNumber.innerHTML = cardTotalValue;
  cardNumberAdd.innerHTML = cardTotalValueIncrease;
  buttonThree.style.backgroundColor = "gray";
  buttonThree.style.cursor = "default";
  buttonThree.style.pointerEvents = "none";

  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "new-div");
  let newElement = document.createElement("h6");
  newElement.innerText = `You have completed the task ${cardTThreeText} at ${timeString}`;
  newDiv.appendChild(newElement);
  addMessages.appendChild(newElement);
});
buttonFour.addEventListener("click", function (e) {
  if (cardTotalValue == 1) {
    alert("You have completed all tasks!");
  } else {
    alert("Board Update Successfully!");
  }
  cardTotalValue--;
  cardTotalValueIncrease++;
  cardsNumber.innerHTML = cardTotalValue;
  cardNumberAdd.innerHTML = cardTotalValueIncrease;
  buttonFour.style.backgroundColor = "gray";
  buttonFour.style.cursor = "default";
  buttonFour.style.pointerEvents = "none";

  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "new-div");
  let newElement = document.createElement("h6");
  newElement.innerText = `You have completed the task ${cardTFourText} at ${timeString}`;
  newDiv.appendChild(newElement);
  addMessages.appendChild(newElement);
});
buttonFive.addEventListener("click", function (e) {
  if (cardTotalValue == 1) {
    alert("You have completed all tasks!");
  } else {
    alert("Board Update Successfully!");
  }
  cardTotalValue--;
  cardTotalValueIncrease++;
  cardsNumber.innerHTML = cardTotalValue;
  cardNumberAdd.innerHTML = cardTotalValueIncrease;
  buttonFive.style.backgroundColor = "gray";
  buttonFive.style.cursor = "default";
  buttonFive.style.pointerEvents = "none";

  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "new-div");
  let newElement = document.createElement("h6");
  newElement.innerText = `You have completed the task ${cardTFiveText} at ${timeString}`;
  newDiv.appendChild(newElement);
  addMessages.appendChild(newElement);
});
buttonSix.addEventListener("click", function (e) {
  if (cardTotalValue == 1) {
    alert("You have completed all tasks!");
  } else {
    alert("Board Update Successfully!");
  }
  cardTotalValue--;
  cardTotalValueIncrease++;
  cardsNumber.innerHTML = cardTotalValue;
  cardNumberAdd.innerHTML = cardTotalValueIncrease;
  buttonSix.style.backgroundColor = "gray";
  buttonSix.style.cursor = "default";
  buttonSix.style.pointerEvents = "none";

  let newDiv = document.createElement("div");
  let newElement = document.createElement("h6");
  newElement.setAttribute("class", "new-ele");
  newElement.innerText = `You have completed the task ${cardTSixText} at ${timeString}`;
  newDiv.appendChild(newElement);
  addMessages.appendChild(newElement);
});

btnClearHistory.addEventListener("click", function (e) {
  const elements = document.querySelectorAll("h6");
  elements.forEach(function (element) {
    element.remove();
  });
});

colorBtn.addEventListener("click", function (e) {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
