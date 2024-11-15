"use strict";

const mouseFollower = document.querySelector(".mouse-follower");

window.addEventListener("mousemove", function (event) {
  const { height, width } = mouseFollower.getBoundingClientRect();
  mouseFollower.style.left = event.pageX - width / 2 + "px";
  mouseFollower.style.top = event.pageY - height / 2 + "px";
});
