import { fetchUserData, fetchRepositories } from "./gateways.js";
import { renderUserData } from "./userRender.js";
import { renderRepos, listElem } from "./reposRender.js";
import { showSpinner, hideSpinner } from "./spinner.js";

const defaultUser = {
  avatar_url: "https://avatars3.githubusercontent.com/u10001",
  name: null,
  location: null,
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = () => {
  listElem.innerHTML = null;
  showSpinner();
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then((url) => fetchRepositories(url))
    .then((reposList) => {
      renderRepos(reposList);
    })
    .catch((err) => {
      alert(err.message);
    })
    .finally(() => hideSpinner());
};

showUserBtnElem.addEventListener("click", onSearchUser);
