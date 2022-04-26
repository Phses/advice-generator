const quote = document.querySelector(".card__quote");
const counterMessage = document.querySelector(".counter");
const cardDivider = document.querySelector(".card__divider");
let counter = 0;
setCounter();

function saveCounterLocalStorage(lastCounter) {
  localStorage.setItem("counter", JSON.stringify(lastCounter));
}

function saveQuoteLocalStorage(quote) {
  localStorage.setItem("quote", quote);
}

function setCounter() {
  if (localStorage.getItem("counter") === "null") {
    counter = 0;
  } else {
    counter = parseInt(JSON.parse(localStorage.getItem("counter")));
  }
  counterMessage.textContent = counter.toString();
}

function changeImages() {
  if (window.innerWidth <= 500) {
    cardDivider
      .querySelector("img")
      .setAttribute("src", "./images/pattern-divider-mobile.svg");
  } else if (window.innerWidth > 500) {
    cardDivider
      .querySelector("img")
      .setAttribute("src", "./images/pattern-divider-desktop.svg");
  }
}

document.querySelector(".card__btn").addEventListener("click", function (e) {
  counter++;
  saveCounterLocalStorage(counter);
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.adviceslip.com/advice", true);
  let output = "";
  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      output = `"${response.slip.advice}"`;
      quote.textContent = output;
      saveQuoteLocalStorage(output);
    } else {
      alert("error");
    }
  };
  xhr.send();

  counterMessage.textContent = counter.toString();
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  setCounter();
  counterMessage.textContent = counter.toString();
  let output = "";
  if (localStorage.getItem("quote") === null) {
    output = "";
  } else {
    output = localStorage.getItem("quote");
  }
  quote.textContent = output;
  changeImages();
});

window.addEventListener("resize", changeImages);
