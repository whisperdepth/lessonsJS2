const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userlocationElem = document.querySelector(".user__location");

const defaultAvatar = "https://avatars3.githubusercontent.com/u10001";
userAvatarElem.src = defaultAvatar;

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const fetchUserData = (userName) => {
  fetch(`https://api.github.com/users/${userName}`)
  .then(response => console.log(response));
};

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName);
};

showUserBtnElem.addEventListener("click", onSearchUser);

/* facebook */