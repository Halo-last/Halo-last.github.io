"use strict";

const panels = document.querySelectorAll(".panel");
const body = document.querySelector("body");


panels.forEach((pan) => {
  pan.addEventListener("click", function (e) {
    removeActive();
    pan.classList.add("active");
  });

  // if(pan.classList.contains())

});

function removeActive() {
  panels.forEach((pan) => {
    pan.classList.remove("active");
  });
}

