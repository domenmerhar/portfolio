"use strict";

const mouseFollower = document.querySelector(".mouse-follower");

window.addEventListener("mousemove", function (event) {
  const { height, width } = mouseFollower.getBoundingClientRect();
  const { clientX, clientY } = event;

  mouseFollower.style.left = clientX - width / 2 + "px";
  mouseFollower.style.top = clientY - height / 2 + "px";
});
