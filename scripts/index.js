const editProfileButton = document.querySelector(".profile__button_type_edit");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
const popupEditProfile = document.querySelector("#popupEditProfile");
const popupEditName = document.querySelector("#popupNameInput");
const popupEditJob = document.querySelector("#popupJobInput");
const popupEditClose = document.querySelector("#popupEditProfileClose");
const popupFormEdit = document.querySelector("#popupEditProfileForm");

const addCardButton = document.querySelector(".profile__button_type_add");
const popupAddCard = document.querySelector("#popupAddCard");
const popupAddCardClose = document.querySelector("#popupAddCardClose");
const popupAddCardForm = document.querySelector("#popupAddCardForm");
const popupCardInput = document.querySelector("#popupCardInput");
const popupLinkInput = document.querySelector("#popupLinkInput");
const popupAddCardSubmit = document.querySelector("#popupAddCardSubmit");

const elements = document.querySelector(".elements");
const template = document.querySelector("#element-template");

const popupImage = document.querySelector(".popup_content_image");
const popupImageClosed = document.querySelector("#popupImageClosed");
const popupImageOpened = document.querySelector(".popup__image");
const popupImageCaption = document.querySelector(".popup__iage-caption");

// CLOSE POPUP WITH OVERLAY
const closePopupWithClick = function (evt) {
  const openedPopup = document.querySelector(".popup_opened");
  if (evt.target === openedPopup) {
    closePopup(openedPopup);
  }
};

// CLOSE POPUP WITH ESC 
function closePopupWithEsc(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

// OPEN POPUP
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("mousedown", closePopupWithClick);
  document.addEventListener("keydown", closePopupWithEsc);
}

// CLOSE POPUP
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("mousedown", closePopupWithClick);
  document.removeEventListener("keyup", closePopupWithEsc);
}

// OPEN EDIT CARD POPUP + CONTENT
function openEditCardPopup() {
  openPopup(popupEditProfile);
  popupEditName.value = profileName.textContent;
  popupEditJob.value = profileJob.textContent;
}

// CLOSE EDIT CARD POPUP
function closeEditCardPopup() {
  closePopup(popupEditProfile);

}

// SUBMIT SAVE OF POPUP EDIT
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = `${popupEditName.value}`;
  profileJob.textContent = `${popupEditJob.value}`;
  closePopup();
}

// OPEN ADD CARD POPUP
function openAddCardPopup() {
  openPopup(popupAddCard);
}

// CLOSE ADD CARD POPUP 
function closeAddCardPopup() {
  closePopup(popupAddCard);
}






// editProfileButton.addEventListener("click", openPopup);
// popupEditClose.addEventListener("click", closePopup);
// popupFormEdit.addEventListener("submit", handleFormSubmit);
