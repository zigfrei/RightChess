const swiper = new Swiper(".swiper", {
  slideClass: "swiper__slide",
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    650: {
      slidesPerView: 1.8,
      spaceBetween: 28,
    },
    1110: {
      spaceBetween: 40,
    },
    1250: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
  },

  pagination: {
    el: ".swiper__pagination",
    type: "bullets",
  },
  wrapperClass: "swiper__wrapper",
});

//Находим кнопки, модально окно, поля ввода, форму
const popup = document.querySelector(".popup");
const keyButton = document.querySelectorAll(".button-key");
const registrationButton = document.querySelectorAll(
  ".button-registration__body"
);
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const formElement = popup.querySelector(".popup__form");

//Открытие и закрытие модального окна
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//При клике на кнопке открыть модальное окно

keyButton.forEach(function (el) {
  el.addEventListener("click", () => {
    openPopup(popup);
  });
});

registrationButton.forEach(function (el) {
  el.addEventListener("click", () => {
    openPopup(popup);
  });
});

//При клике мимо области закрыть модальное окно

popup.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup")) {
    closePopup(popup);
  }
});

//ввод информации о себе

function formSubmitHandler(evt) {
  evt.preventDefault();
  //Отправка Post запроса на сервер
  console.log(nameInput.value);
  console.log(emailInput.value);
  closePopup(popup);
}

formElement.addEventListener("submit", formSubmitHandler);
