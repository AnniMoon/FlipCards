//Animation on h1
let h1Element = document.querySelector("h1");

let text = h1Element.textContent;

let letters = text.split("");

let newHtml = letters.map(letter => `<span class="letter">${letter}</span>`).join("");

h1Element.innerHTML = newHtml;

//Dark night mode

let sun = document.querySelector(".fa-sun");
let moon = document.querySelector(".fa-moon");
let body = document.body;
sun.addEventListener("click", () =>
    {
      sun.style.visibility = "hidden";
      moon.style.visibility = "visible";
        body.style.backgroundColor = "black";
    });

moon.addEventListener("click", () => {
    sun.style.visibility ="visible";
    moon.style.visibility = "hidden";
    body.style.backgroundColor = "#08504b";
});