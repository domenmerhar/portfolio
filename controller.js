"use strict";

import {
  addRemoveClassOnIntersection,
  handleCardClick,
  handleContactBtn,
  handleMouseMove,
  removeClassOnIntersection,
} from "./model.js";
import {
  bookViewerCardHTML,
  contactForm,
  grandBuyCardHTML,
  moonSVG,
  netflixCloneCardHTML,
  sunSVG,
} from "./view.js";

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

let transitionEffectCounter = 0;
const themeSwitcher = document.querySelector(".theme-switcher");
const themeEffect = document.querySelector(".theme-effect");

const lazyLoadable = [
  ...tehcnologies,
  ...projects,
  ...aboutMeParagraphs,
  ...timeLineTextBoxes,
];

if (localStorage.getItem("light-mode") === "true") {
  document.body.classList.add("light-mode");
  themeSwitcher.innerHTML = moonSVG;
}
lazyLoadable.forEach((t) => {
  t.style.transition = "all 0.2s";
  t.classList.add("lazy-load");
});

const navObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting === false)
        return navbar.classList.remove("hidden");
      if (entry.isIntersecting) navbar.classList.add("hidden");
    });
  },
  { threshold: 0.8 }
);

const footerObserver = new IntersectionObserver(
  addRemoveClassOnIntersection(navbar, "hidden"),
  { threshold: 0.1 }
);

const lazyLoadObserver = new IntersectionObserver(
  removeClassOnIntersection("lazy-load"),
  { threshold: 0.5 }
);

const heroObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        footerObserver.observe(footer);
        navObserver.observe(hero);
        heroObserver.unobserve(hero);
      }
    });
  },
  { threshold: 0.5 }
);

heroObserver.observe(hero);

window.addEventListener("mousemove", handleMouseMove(mouseFollower));

contactBtns.forEach(handleContactBtn(contactForm, toastDuration, email));

grandBuyCard.addEventListener("click", handleCardClick(grandBuyCardHTML));
bookViewerCard.addEventListener("click", handleCardClick(bookViewerCardHTML));
netflixCloneCard.addEventListener(
  "click",
  handleCardClick(netflixCloneCardHTML)
);

themeSwitcher.addEventListener("click", () => {
  themeEffect.classList.add("expand");
});

themeEffect.addEventListener("transitionend", () => {
  themeEffect.classList.remove("expand");
  transitionEffectCounter++;

  if (transitionEffectCounter % 2 === 0) return;

  if (document.body.classList.contains("light-mode")) {
    document.body.classList.remove("light-mode");
    themeSwitcher.innerHTML = sunSVG;
  } else {
    document.body.classList.add("light-mode");
    themeSwitcher.innerHTML = moonSVG;
  }

  localStorage.setItem(
    "light-mode",
    `${document.body.classList.contains("light-mode")}`
  );
});

lazyLoadable.forEach((t) => lazyLoadObserver.observe(t));
