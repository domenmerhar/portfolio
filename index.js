"use strict";

const hero = document.querySelector(".hero");
const footer = document.querySelector(".footer");
const navbar = document.querySelector(".navbar");

const mouseFollower = document.querySelector(".mouse-follower");

const navObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navbar.classList.add("hidden");
        console.log("hide");
      } else {
        navbar.classList.remove("hidden");
        console.log("show");
      }
    });
  },
  { threshold: 0.5 }
);

const footerObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navbar.classList.add("hidden");
      } else {
        navbar.classList.remove("hidden");
      }
    });
  },
  { threshold: 0.1 }
);

navObserver.observe(hero);
footerObserver.observe(footer);

window.addEventListener("mousemove", function (event) {
  const { height, width } = mouseFollower.getBoundingClientRect();
  const { clientX, clientY } = event;

  mouseFollower.style.left = clientX - width / 2 + "px";
  mouseFollower.style.top = clientY - height / 2 + "px";
});
