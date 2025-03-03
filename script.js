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
console.log(cardTOneText);

const buttonOne = document.getElementById("btn-one");
const buttonTwo = document.getElementById("btn-two");
const buttonThree = document.getElementById("btn-three");
const buttonFour = document.getElementById("btn-four");
const buttonFive = document.getElementById("btn-five");
const buttonSix = document.getElementById("btn-six");
const buttonSeven = document.getElementById("btn-seven");

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
  alert("Board Update Successfully!");
  cardTotalValue--;
  cardTotalValueIncrease++;
  cardsNumber.innerHTML = cardTotalValue;
  cardNumberAdd.innerHTML = cardTotalValueIncrease;
  buttonOne.style.backgroundColor = "gray";
  buttonOne.style.cursor = "default";
  buttonOne.style.pointerEvents = "none";

  let newDiv = document.createElement("div");
  let newElement = document.createElement("p");
  newElement.innerText = `You have completed the task ${cardTOneText} at ${timeString}`;
  newDiv.appendChild(newElement);
  addMessages.appendChild(newElement);
});
buttonTwo.addEventListener("click", function (e) {
  alert("Board Update Successfully!");
  cardTotalValue--;
  cardTotalValueIncrease++;
  cardsNumber.innerHTML = cardTotalValue;
  cardNumberAdd.innerHTML = cardTotalValueIncrease;
  buttonOne.style.backgroundColor = "gray";
  buttonOne.style.cursor = "default";
  buttonOne.style.pointerEvents = "none";
});
buttonThree.addEventListener("click", function (e) {
  alert("Board Update Successfully!");
  cardTotalValue--;
  cardTotalValueIncrease++;
  cardsNumber.innerHTML = cardTotalValue;
  cardNumberAdd.innerHTML = cardTotalValueIncrease;
  buttonOne.style.backgroundColor = "gray";
  buttonOne.style.cursor = "default";
  buttonOne.style.pointerEvents = "none";
});
buttonFour.addEventListener("click", function (e) {
  alert("Board Update Successfully!");
  cardTotalValue--;
  cardTotalValueIncrease++;
  cardsNumber.innerHTML = cardTotalValue;
  cardNumberAdd.innerHTML = cardTotalValueIncrease;
  buttonOne.style.backgroundColor = "gray";
  buttonOne.style.cursor = "default";
  buttonOne.style.pointerEvents = "none";
});
buttonFive.addEventListener("click", function (e) {
  alert("Board Update Successfully!");
  cardTotalValue--;
  cardTotalValueIncrease++;
  cardsNumber.innerHTML = cardTotalValue;
  cardNumberAdd.innerHTML = cardTotalValueIncrease;
  buttonOne.style.backgroundColor = "gray";
  buttonOne.style.cursor = "default";
  buttonOne.style.pointerEvents = "none";
});
buttonSix.addEventListener("click", function (e) {
  alert("Board Update Successfully!");
  cardTotalValue--;
  cardTotalValueIncrease++;
  cardsNumber.innerHTML = cardTotalValue;
  cardNumberAdd.innerHTML = cardTotalValueIncrease;
  buttonOne.style.backgroundColor = "gray";
  buttonOne.style.cursor = "default";
  buttonOne.style.pointerEvents = "none";
});
