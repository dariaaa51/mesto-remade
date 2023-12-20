const editProfileButton = document.querySelector(".profile__button_type_edit");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
const popupEditProfile = document.querySelector(".popup");
const popupEditName = popupEditProfile.querySelector(".popup__text_type_name");
const popupEditJob = popupEditProfile.querySelector(".popup__text_type_about");
const popupEditClose = popupEditProfile.querySelector(".popup__close-button");
const popupFormEdit = document.querySelector(".popup__form");

function openPopup() {
  popupEditProfile.classList.add("popup_opened");
  popupEditName.value = profileName.textContent;
  popupEditJob.value = profileJob.textContent;
}

function closePopup() {
  popupEditProfile.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = `${popupEditName.value}`;
  profileJob.textContent = `${popupEditJob.value}`;
  closePopup();
}

editProfileButton.addEventListener("click", openPopup);
popupEditClose.addEventListener("click", closePopup);
popupFormEdit.addEventListener("submit", handleFormSubmit);
