
let h1Element = document.querySelector("h1");

let text = h1Element.textContent;

let letters = text.split("");

let newHtml = letters.map(letter => `<span class="letter">${letter}</span>`).join("");

h1Element.innerHTML = newHtml;



