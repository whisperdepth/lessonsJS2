const baseUrl = "https://5eca703a38df960016511722.mockapi.io/api/v1/users";

const formElem = document.querySelector(".login-form");
const errorElem = document.querySelector(".error-text");

const onFormSubmit = (e) => {
  e.preventDefault();

  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );

  alert(JSON.stringify(formData));
  
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(formData),
  });

  formElem.reset();
};
formElem.addEventListener("submit", onFormSubmit);
