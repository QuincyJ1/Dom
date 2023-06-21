
import { renderHeader } from "./header.js";

renderHeader(false); // irgi nera pagrindinis psl, rasai false. 

const goods = [
    { name: 'Morka', price: 1.1, },
    { name: 'Agurkas', price: 3.7, },
    { name: 'Pomidoras', price: 4.3, },
    { name: 'Bulve', price: 2, },
    { name: 'Kalafijoras', price: 1.56, },
    { name: 'Petrazole', price: 1.23, },
    { name: 'Citrina', price: 1, },
];

const listDOM = document.querySelector('ul');


for (const { name, price } of goods){
    const formatedPrice = price.toFixed(2)
    listDOM.innerHTML += `<li>${name} (${formatedPrice} Eur)</li>`;

}

