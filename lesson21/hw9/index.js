export function finishForm() {
  const formInput = document.createElement("input");
  formInput.type = "text";
  formInput.name = "login";
  document.querySelector(".login-form").prepend(formInput);
  document.querySelector("input").nextElementSibling.type = "password";
}
