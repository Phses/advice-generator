# Frontend Mentor - Advice generator app solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- Gerar um conselho aleatório;
- Ver a quantidade de conselhos gerados;

### Screenshot

![](./images/Captura-de-tela.JPG)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- JS Vanilla
- API

### What I learned

Consumir uma API realizando requisições AJAX

```js
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
```

### Useful resources

- [https://api.adviceslip.com/] - Advice Slip JSON API
# advice-generator
