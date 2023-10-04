const box = document.querySelector("[data-js=box]");
const redButton = document.querySelector("[data-js=js-red-button]");
const greenButton = document.querySelector("[data-js=js-green-button]");
const blueButton = document.querySelector("[data-js=js-blue-button]");
const grayButton = document.querySelector("[data-js=js-gray-button]");

/*
We want to add some functionality to the buttons on this page. When pressing a button, the corresponding color should be applied to the box.
  1: Create a function removeAllColors which removes all color classes from the box.
  2: Create a function addColor which takes a class name as a parameter and adds the class to the box.
  3: Use the two functions in the event listeners of the buttons to color in the box when the button is clicked.
*/

redButton.addEventListener("click", () => {
  // box.classList.remove("red","blue","green","gray");
  removeClass();
  // box.classList.add("red");
  addClass("red");
  // use your functions to
  // - remove all classes
  // - then add the class name: "red"
  console.log("red");
});

blueButton.addEventListener("click", () => {
  // box.classList.remove("red","blue","green","gray");
  removeClass();
  // box.classList.add("blue");
  addClass("blue");
  // use your functions to
  // - remove all classes
  // - then add the class name: "blue"
  console.log("blue");
});

greenButton.addEventListener("click", () => {
  // box.classList.remove("red","blue","green","gray");
  removeClass();
  // box.classList.add('green');
  addClass("green");
  // use your functions to
  // - remove all classes
  // - then add the class name: "green"
});

grayButton.addEventListener("click", () => {
  // box.classList.remove("red","blue","green","gray");
  removeClass();
  // box.classList.add("gray");
  addClass("gray");
  // use your functions to
  // - remove all classes
  // - then add the class name: "gray"
});

// Write your two functions below:

function removeClass() {
  box.classList.remove("red", "blue", "green", "gray");
}

function addClass(className) {
  box.classList.add(className);
}
