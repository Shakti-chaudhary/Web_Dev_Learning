// Selectors

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Event Listeners

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Run validations
  validateRequiredFields([username, email, password, password2]);
  validateLength(username, 3, 15);
  validateLength(password, 6, 25);
  validateEmail(email);
  validatePasswordMatch(password, password2);
});

// Functions

// Set form message
function setFormMessage(formControl, type, message) {
  formControl.classList.remove("error");
  formControl.classList.add(type);
  formControl.querySelector("small").innerText = message;
}

// Show error massage
function showError(input, message) {
  setFormMessage(input.parentElement, "error", message);
}

// Show success massage
function showSuccess(input) {
  setFormMessage(input.parentElement, "success", "");
}

// Get fiel name fist char cappital
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Validation required fields
function validateRequiredFields(requiredFields) {
  requiredFields.forEach((field) => {
    if (field.value.trim() === "") {
      showError(field, `${getFieldName(field)} is required`);
    } else {
      showSuccess(field);
    }
  });
}

// Validate lengths of fields
function validateLength(field, min, max) {
  if (field.value.length < min) {
    showError(
      field,
      `${getFieldName(field)} must be at least ${min} characters`
    );
  } else if (field.value.length > max) {
    showError(
      field,
      `${getFieldName(field)} must be less than ${max} characters`
    );
  } else {
    showSuccess(field);
  }
}

// validatte email
function validateEmail(email) {
  const re =
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;

  if (re.test(email.value)) {
    showSuccess(email);
  } else {
    showError(email, "Email is not valid");
  }
}

// Validate password match
function validatePasswordMatch(password, password2) {
  if (password.value !== password2.value) {
    showError(password2, "Passwords do not match");
  }
}
