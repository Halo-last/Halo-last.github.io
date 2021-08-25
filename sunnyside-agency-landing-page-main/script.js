"use strict";

function myFunction() {
  const btn = document.getElementById("myLinks");

  if (btn.style.display === "block") {
    btn.style.display = "none";
  } else {
    btn.style.display = "block";
  }
}
