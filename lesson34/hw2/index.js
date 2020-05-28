const baseUrl = "https://5eca703a38df960016511722.mockapi.io/api/v1/users";

const formElem = document.querySelector(".login-form");
const errorElem = document.querySelector(".error-text");

const onFormSubmit = (e) => {
  e.preventDefault();

  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );

  formElem.reset();

  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((value) => alert(JSON.stringify(value)))
    .catch(() => {
      errorElem.textContent = "Failed to create user";
    });
};
formElem.addEventListener("submit", onFormSubmit);
const submitBtn = document.querySelector(".submit-button");

const onInput = () => {
  errorElem.textContent = null
  formElem.reportValidity()
    ? (submitBtn.disabled = false)
    : (submitBtn.disabled = true);
};

formElem.addEventListener("input", onInput);
