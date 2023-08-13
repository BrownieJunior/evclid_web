"use strict";
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },

  autoplay: {
    delay: 5000,
  },
  effect: "slide",
  speed: 1000,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// tabs
document.querySelector(`[data-path="one"]`).style.color = "#ff9900";
// Функция для установки цвета в зависимости от активного таба
function setColors(activePath) {
  document.querySelectorAll("[data-path]").forEach(function (block) {
    if (block.dataset.path === activePath) {
      block.style.color = "#ff9900";
    } else {
      block.style.color = "";
    }
  });
}

document.querySelectorAll(".work__step-link").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    // Устанавливаем цвета в зависимости от активного таба
    setColors(path);

    document.querySelectorAll(".work__step-link").forEach(function (btn) {
      btn.classList.remove("work__steplink--active");
    });
    e.currentTarget.classList.add("work__steplink--active");
    document.querySelectorAll(".work__content").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("work__content--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("work__content--active");
  });
});

// burger
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

//accordion

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion__item");

  accordionItems.forEach((item) => {
    const btn = item.querySelector(".accordion__top");
    const panel = item.querySelector(".accordion__bottom");
    const svg = item.querySelector(".accordion__btn");

    btn.addEventListener("click", () => {
      panel.classList.toggle("active");
      item.classList.toggle("active");

      if (panel.classList.contains("active")) {
        panel.classList.remove("closing");
        svg.classList.add("rotate");
      } else {
        panel.classList.add("closing");
        svg.classList.remove("rotate");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // ФОРМА 1
  const form1 = document.getElementById("form_id");
  const resultDiv1 = document.getElementById("result__div-id");

  form1.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.querySelector("input[name='name1']");
    const emailInput = document.querySelector("input[name='email1']");
    const textInput = document.querySelector("textarea[name='text1']");
    const agreementCheckbox = document.querySelector(".footer__agreement");

    const name = nameInput.value;
    const email = emailInput.value;
    const text = textInput.value + " ";

    if (!/^[A-Za-zА-Яа-я\s]+$/.test(name)) {
      resultDiv1.innerText =
        "Пожалуйста введите верное имя (допустимы только буквы или пробел)";
      resultDiv1.style.color = "#f0f01f";

      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      resultDiv1.innerText =
        "Пожалуйста введите верный адрес электронной почты.";
      resultDiv1.style.color = "#f0f01f";
      return;
    }

    if (!agreementCheckbox.checked) {
      resultDiv1.innerText = "Согласитесь с правилами обработки данных.";
      resultDiv1.style.color = "#fb2525";

      return;
    }

    fetch("form.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(
        email
      )}&text=${encodeURIComponent(text)}`,
    })
      .then((response) => response.text())
      .then((data) => {
        resultDiv1.innerText = data;
        resultDiv1.style.color = "#1bb82d";
        form1.reset();
      })
      .catch((error) => {
        resultDiv1.innerText = "Произошла ошибка при отправке данных.";
        resultDiv1.style.color = "#fb2525";
        console.error(error);
      });
  });

  // ФОРМА 2
  const form2 = document.getElementById("form_id-2");
  const resultDiv2 = document.getElementById("result__div-id2");

  form2.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.querySelector("input[name='name2']");
    const emailInput = document.querySelector("input[name='email2']");
    const textInput = document.querySelector("textarea[name='text2']");
    const agreementCheckbox = document.querySelector(".footer__agreement2");

    const name = nameInput.value;
    const email = emailInput.value;
    const text = textInput.value + " ";

    if (!/^[A-Za-zА-Яа-я\s]+$/.test(name)) {
      resultDiv2.innerText =
        "Пожалуйста введите верное имя (допустимы только буквы или пробел)";
      resultDiv2.style.color = "#f0f01f";
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      resultDiv2.innerText =
        "Пожалуйста введите верный адрес электронной почты.";
      resultDiv2.style.color = "#f0f01f";
      return;
    }

    if (!agreementCheckbox.checked) {
      resultDiv2.innerText = "Согласитесь с правилами обработки данных.";
      resultDiv2.style.color = "#fb2525";
      return;
    }

    fetch("form.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(
        email
      )}&text=${encodeURIComponent(text)}`,
    })
      .then((response) => response.text())
      .then((data) => {
        resultDiv2.innerText = data;
        resultDiv2.style.color = "#1bb82d";
        form2.reset();
      })
      .catch((error) => {
        resultDiv2.innerText = "Произошла ошибка при отправке данных.";
        resultDiv2.style.color = "#fb2525";
        console.error(error);
      });
  });
});
