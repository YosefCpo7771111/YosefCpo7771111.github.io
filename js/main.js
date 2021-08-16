document.getElementById("menuButton").onclick = function () {
  document.getElementById("menu").classList.toggle("show");
};

let classOne = document.getElementById("first-class");
let classTwo = document.getElementById("second-class");
let classThree = document.getElementById("third-class");
let classFour = document.getElementById("fourth-class");

let classOneHeading = document.getElementById("first-class-h");
let classTwoHeading = document.getElementById("second-class-h");
let classThreeHeading = document.getElementById("third-class-h");
let classFourHeading = document.getElementById("fourth-class-h");

let mainHeading = document.getElementById("main-class-h");
let mainImage = document.getElementById("main-img");

function removeClassActiv() {
  classOne.classList.remove("activ");
  classTwo.classList.remove("activ");
  classThree.classList.remove("activ");
  classFour.classList.remove("activ");
}

classOne.onclick = function () {
  removeClassActiv();
  classOne.classList.add("activ");
  mainHeading.innerHTML = "First Training Class";
  mainImage.setAttribute("src", "images/training-image-01.jpg");
};

classTwo.onclick = function () {
  removeClassActiv();
  classTwo.classList.add("activ");
  mainHeading.innerHTML = "Second Training Class";
  mainImage.setAttribute("src", "images/training-image-02.jpg");
};

classThree.onclick = function () {
  removeClassActiv();
  classThree.classList.add("activ");
  mainHeading.innerHTML = "Third Training Class";
  mainImage.setAttribute("src", "images/training-image-03.jpg");
};

classFour.onclick = function () {
  removeClassActiv();
  classFour.classList.add("activ");
  mainHeading.innerHTML = "Fourth Training Class";
  mainImage.setAttribute("src", "images/training-image-04.jpg");
};

let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");

function removeClassActivDays() {
  monday.classList.remove("activ");
  tuesday.classList.remove("activ");
  wednesday.classList.remove("activ");
  thursday.classList.remove("activ");
  friday.classList.remove("activ");
}

monday.onclick = function () {
  removeClassActivDays();
  monday.classList.add("activ");
};

tuesday.onclick = function () {
  removeClassActivDays();
  tuesday.classList.add("activ");
};

wednesday.onclick = function () {
  removeClassActivDays();
  wednesday.classList.add("activ");
};

thursday.onclick = function () {
  removeClassActivDays();
  thursday.classList.add("activ");
};

friday.onclick = function () {
  removeClassActivDays();
  friday.classList.add("activ");
};
