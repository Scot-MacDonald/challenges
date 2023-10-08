console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}

function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

// Add an event listener for the checkbox's "change" event
tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError(); // Hide the error message when the checkbox is checked
  } else {
    showTosError(); // Show the error message when the checkbox is unchecked
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!tosCheckbox.checked) {
    // ! is a logical NOT operator
    showTosError();
    return;
  }

  hideTosError();
  showSuccessMessage();

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

// I could not quite get this to work, so I asked the machine for help
