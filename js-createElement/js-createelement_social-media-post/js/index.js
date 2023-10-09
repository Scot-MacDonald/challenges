console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const body = document.querySelector("body");

const article = document.createElement("article");
article.classList.add("post");
body.append(article);

const p = document.createElement("p");
p.classList.add("post__content");
article.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
article.append(p);

const footer = document.createElement("footer");
footer.classList.add("post__footer");
article.append(footer);

const span = document.createElement("span");
span.classList.add("post__username");
span.textContent = "@username";
footer.append(span);

const button = document.createElement("button");
button.classList.add("post__button");
button.textContent = "♥ Like";
footer.append(button);

button.addEventListener("click", handleLikeButtonClick);
