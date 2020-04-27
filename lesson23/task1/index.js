const emailInputElem = document.querySelector("#email");
const passwordInputElem = document.querySelector("#password");

const emailErrorElem = document.querySelector(".error-text_email");
const passwordErrorElem = document.querySelector(".error-text_password");

const isRequred = (value) => (value ? undefined : "Required");
const isEmail = (value) =>
  value.includes("@") ? undefined : "Should be an email";

const validatorsByField = {
  email: [isRequred, isEmail],
  password: [isRequred],
};

const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(", ");
};

const onEmailChange = (e) => {
  const errorText = validate("email", e.target.value);
  emailErrorElem.textContent = errorText;
};

const onPasswordChange = (e) => {
  const errorText = validate("password", e.target.value);
  passwordErrorElem.textContent = errorText;
};

emailInputElem.addEventListener("input", onEmailChange);
passwordInputElem.addEventListener("input", onPasswordChange);

const formElem = document.querySelector(".login-form");

const onFormSubmit = (e) => {
  e.preventDefault();
  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );

  alert(JSON.stringify(formData));
};

formElem.addEventListener("submit", onFormSubmit);
