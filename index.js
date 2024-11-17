"use strict";

import {
  addRemoveClassOnIntersection,
  createToast,
  handleCardClick,
  handleContactBtn,
  handleMouseMove,
  removeClassOnIntersection,
} from "./model.js";
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
  addRemoveClassOnIntersection(navbar, "hidden"),
  { threshold: 0.1 }
);

const lazyLoadObserver = new IntersectionObserver(
  removeClassOnIntersection("lazy-load"),
  { threshold: 0.5 }
);

window.addEventListener("mousemove", handleMouseMove(mouseFollower));

contactBtns.forEach(handleContactBtn(contactForm, toastDuration, email));

grandBuyCard.addEventListener("click", handleCardClick(grandBuyCardHTML));
bookViewerCard.addEventListener("click", handleCardClick(bookViewerCardHTML));
netflixCloneCard.addEventListener(
  "click",
  handleCardClick(netflixCloneCardHTML)
);

navObserver.observe(hero);
footerObserver.observe(footer);
lazyLoadable.forEach((t) => lazyLoadObserver.observe(t));
