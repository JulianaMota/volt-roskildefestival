"use strict";
const videoheader = document.querySelector("video");
const voltslogan = document.querySelector(".slogan");
const voltbook = document.querySelector(".book");
console.log(videoheader);

window.addEventListener("load", init);

function init() {
  videoheader.play();

  videoheader.onended = function() {
    voltslogan.classList.remove("hide");
    voltbook.classList.remove("hide");
  };
}
