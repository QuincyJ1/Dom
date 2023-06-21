import { renderHeader } from "./header.js";

renderHeader(false); // nera pagrindinis puslapis, rasai false

console.clear();

const formDOM = document.querySelector('form');
const minus3DOM = formDOM.querySelector('button');
const minus1DOM = formDOM.querySelector('button:nth-child(2)'); //randa reikiama elementa.
const numberDOM = formDOM.querySelector('div');
const plus1DOM = formDOM.querySelector('button:nth-child(4)');
const plus3DOM = formDOM.querySelector('button:nth-child(5)');
// // taip greiciau rasi reikiamus elementus. ('') irasai css selectoriu, kuri elemeenta nori paimt. 
let counter = 0;

plus1DOM.addEventListener('click', (event) => {
    event.preventDefault(); //preventinam defaultine formos veikima (defaulte refreshina po paspaudimo)
    numberDOM.textContent = ++counter;
});

minus1DOM.addEventListener('click', (event) => {
    event.preventDefault();
    numberDOM.textContent = --counter;
});

plus3DOM.addEventListener('click', (event) => {
    event.preventDefault();
    counter += 3;
    numberDOM.textContent = counter;
});

minus3DOM.addEventListener('click', (event) => {
    event.preventDefault();
    counter -= 3;
    numberDOM.textContent = counter;
});

