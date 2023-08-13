const openPopupBtn = document.querySelector(".hero__btn-link");
const popup = document.getElementById("popup");
const closePopup = document.querySelector(".popup__close");
const popupContent = document.querySelector(".popup__content");
const body = document.querySelector("body");

openPopupBtn.addEventListener("click", function () {
  popup.classList.add("open");
  body.style.overflowY = "hidden";
});

closePopup.addEventListener("click", function () {
  popup.classList.remove("open");
  body.style.overflowY = "auto";
});

document.addEventListener("click", function (event) {
  if (
    event.target.closest(".popup__body") &&
    !event.target.closest(".popup__content")
  ) {
    popup.classList.remove("open");
    body.style.overflowY = "auto";
  }
});
