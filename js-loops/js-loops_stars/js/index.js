console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    const image = document.createElement("img");
    // image.src("./assets/star-filled");
    if (filledStars >= i) {
      image.setAttribute("src", "./assets/star-filled.svg");
      image.setAttribute("index", i);
    } else {
      image.setAttribute("src", "./assets/star-empty.svg");
      image.setAttribute("index", i);
    }
    image.addEventListener("click", () => {
      console.log("index", i);
      renderStars(i);
    });
    starContainer.append(image);
  }
  //--^-- your code here --^--
}

renderStars(4);
