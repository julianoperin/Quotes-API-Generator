//Variables

const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const fade = document.getElementById("fade");

let url = "https://type.fit/api/quotes";

// event listener

btn.addEventListener("click", getData);

function getData() {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      let randomNumber = Math.floor(Math.random() * 1000 + 1);
      quote.innerHTML =
        '<span>"</span>' + data[randomNumber].text + '<span>"</span>';
      author.innerText = `- ${data[randomNumber].author}`;
      addFade();
      setTimeout(removeFade, 3000);
    });
}
setInterval(getData, 5000);

// function getQuote() {
//   let number = Math.floor(Math.random() * quotes.length);
//   quote.innerHTML = '<span>"</span>' + quotes[number].quote + '<span>"</span>';
//   author.innerHTML = "<span>-</span>" + quotes[number].source;
//   addFade();
//   setTimeout(removeFade, 3000);
// }

// setInterval(getQuote, 5000);

function addFade() {
  fade.classList.add("fade");
}

function removeFade() {
  fade.classList.remove("fade");
}
