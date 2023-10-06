console.clear();

const form = document.querySelector('[data-js="form"]');
const list = document.querySelector(".list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event);
  console.log(event.target);
  const formData = new FormData(event.target);

  const guest = Object.fromEntries(formData);
  console.log(guest);
  event.target.reset();
  event.target.elements.firstName.focus();
  //   const newGuest = `<div>${guest.age} - ${guest.email}</div>`;

  const ageBadnessSum = Number(guest.age) + Number(guest.badness);
  console.log(`The age badness sum of ${guest.firstName} is ${ageBadnessSum}`);
});
