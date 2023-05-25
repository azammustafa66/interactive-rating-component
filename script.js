"use strict";

const clickElement = document.querySelector(".click");
const numButtons = document.querySelectorAll("[rating-option]");
const thankYouElement = document.querySelector(".thank-you");
const submitBtn = document.querySelector(".submit-btn");
const ratingElement = document.querySelector(".rating");
let userRating = null;

numButtons.forEach((button) => {
  button.classList.remove('btn--orange');
  button.addEventListener("click", () => {
    userRating = parseInt(button.innerText);
      button.classList.remove("btn--orange");
    button.classList.add("btn--orange");
  });
});

submitBtn.addEventListener("click", () => {
  if (userRating === null) alert("Please select a rating");
  else {
    clickElement.classList.add("hidden");
    thankYouElement.classList.remove("hidden");
    ratingElement.textContent = `You selected ${userRating} out of 5`;
  }
});
