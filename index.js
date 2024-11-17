"use strict";

import { addClassOnIntersection, removeClassOnIntersection } from "./model.js";
import {
  bookViewerCardHTML,
  contactForm,
  grandBuyCardHTML,
  netflixCloneCardHTML,
} from "./view.js";

console.log({ bookViewerCardHTML });

const toastDuration = 5000;

const email = "johndoe@gmail.com";

const hero = document.querySelector(".hero");
const footer = document.querySelector(".footer");
const navbar = document.querySelector(".navbar");

const mouseFollower = document.querySelector(".mouse-follower");
const contactBtns = document.querySelectorAll(".contact-email");

const tehcnologies = document.querySelectorAll(".technology");
const projects = document.querySelectorAll(".projects > div");
const aboutMeParagraphs = document.querySelectorAll(".about-me p");
const timeLineTextBoxes = document.querySelectorAll(".time-line__text-box");

const grandBuyCard = document.querySelector(".project__card-big");
const bookViewerCard = document.querySelector(
  ".project__card-small:first-of-type"
);
const netflixCloneCard = document.querySelector(
  ".project__card-small:last-of-type"
);

const lazyLoadable = [
  ...tehcnologies,
  ...projects,
  ...aboutMeParagraphs,
  ...timeLineTextBoxes,
];

lazyLoadable.forEach((t) => {
  t.style.transition = "all 0.2s";
  t.classList.add("lazy-load");
});

const navObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) return navbar.classList.add("hidden");
      navbar.classList.remove("hidden");
    });
  },
  { threshold: 0.5 }
);

const footerObserver = new IntersectionObserver(
  addClassOnIntersection(navbar, "hidden"),
  { threshold: 0.1 }
);

const lazyLoadObserver = new IntersectionObserver(
  removeClassOnIntersection("lazy-load"),
  { threshold: 0.5 }
);

window.addEventListener("mousemove", function (event) {
  const { height, width } = mouseFollower.getBoundingClientRect();
  const { clientX, clientY } = event;

  mouseFollower.style.left = clientX - width / 2 + "px";
  mouseFollower.style.top = clientY - height / 2 + "px";
});

contactBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    document.body.insertAdjacentHTML("beforeend", contactForm);
    window.document.body.classList.add("disable-scroll");

    const subject = document.querySelector(".contact__input");
    const message = document.querySelector(".contact__textarea");
    const subjectError = document.querySelector(".contact__subject-error");
    const messageError = document.querySelector(".contact__message-error");
    const formButton = document.querySelector(".contact__button");
    const backdrop = document.querySelector(".backdrop");

    const reset = () => {
      document.querySelector(".modal").remove();
      backdrop.removeEventListener("click", handleBackdropClick);
      window.document.body.classList.remove("disable-scroll");
    };

    function handleBackdropClick(e) {
      if (e.target !== backdrop) return;
      reset();
    }

    backdrop.addEventListener("click", handleBackdropClick);

    function handleFormSubmit(e) {
      e.preventDefault();

      const subjectText = subject.value;
      const messageText = message.value;

      if (!subjectText) subjectError.textContent = "Zadeva je obvezna";
      else subjectError.textContent = "";

      if (!messageText) messageError.textContent = "Sporočilo je obvezno";
      else messageError.textContent = "";

      if (!subject.value || !message.value) return;

      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(messageText)}`;

      createToast("Sporočilo je bilo poslano");
      reset();
    }

    formButton.addEventListener("click", handleFormSubmit);
  })
);

const handleCardClick = (card) =>
  function () {
    document.body.insertAdjacentHTML("beforeend", card);
    window.document.body.classList.add("disable-scroll");

    const backdrop = document.querySelector(".backdrop");
    backdrop.addEventListener("click", handleBackdropClick);

    const reset = () => {
      document.querySelector(".modal").remove();
      backdrop.removeEventListener("click", handleBackdropClick);
      window.document.body.classList.remove("disable-scroll");
    };

    function handleBackdropClick(e) {
      if (e.target !== backdrop) return;
      reset();
    }
  };

grandBuyCard.addEventListener("click", handleCardClick(grandBuyCardHTML));
bookViewerCard.addEventListener("click", handleCardClick(bookViewerCardHTML));
netflixCloneCard.addEventListener(
  "click",
  handleCardClick(netflixCloneCardHTML)
);

navObserver.observe(hero);
footerObserver.observe(footer);
lazyLoadable.forEach((t) => lazyLoadObserver.observe(t));

function createToast(message) {
  window.document.body.insertAdjacentHTML("beforeend", toast(message));
  const toast = document.querySelector(".toast");

  setTimeout(() => {
    toast.classList.remove("hidden");

    setTimeout(() => {
      toast.classList.add("hidden");
      toast.addEventListener("transitionend", function deleteToast() {
        toast.remove();
        toast.removeEventListener("transitionend", deleteToast);
      });
    }, toastDuration);
  }, 100);
}
