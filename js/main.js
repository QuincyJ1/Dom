// console.clear();

import { renderHeader } from './header.js';
renderHeader(true); // pagrindinis psl, rsai true.

const buttonDOM = document.getElementById('mygtukas');
const titleDOM = document.getElementById('antraste');





function kaDaryti () {
    titleDOM.textContent = 'Labas vakaras!';
}

buttonDOM.addEventListener('click', kaDaryti);

