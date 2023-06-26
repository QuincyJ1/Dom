import { renderHeader } from "./header.js";

renderHeader();


const formDOM = document.querySelector('form');
const inputDOM = formDOM.querySelector('input');
const boardDOM = document.querySelector('.board')

formDOM.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const number = parseInt(inputDOM.value); // inputo elementai neturi innerText. Jie turi value.
    //parseInt pavercia bet koki skaiciu i sveikaji skaiciu. 
    if (number > 0 && number % 1 === 0) {
        renderChessBoard(number);
    }
}
    )


function renderChessBoard(size = 8) {
    let blackWhiteHTML = '';
    let whiteBlackHTML = '';
    let HTML = '';

    for (let j = 0; j < size; j++) {
        blackWhiteHTML += `<div class="cell ${j % 2 === 0 ? 'black' : ''}"></div>`;
        whiteBlackHTML += `<div class="cell ${j % 2 === 0 ? '' : 'black'}"></div>`;
    }
// sita eilute virsuj yra vienas prie vieno apacioj esanciam if kodui.
        // if (j % 2 === 0){
        // HTML += '<div class="cell black"></div>';
        // } else {
        //     HTML += '<div class="cell"></div>';
        // }
   for (let i = 0 ; i < size; i++){
        HTML += `<div class="row">${i % 2 === 0 ? blackWhiteHTML : whiteBlackHTML}</div>`
            // if (j % 2 === 0){
            //     HTML += '<div class="cell"></div>';
            //     } else {
            //         HTML += '<div class="cell black"></div>';
            //     }
            
        }
        boardDOM.innerHTML = HTML;
}
   
    
  


renderChessBoard(8);

//jeigu neduoda funkcijai jokios reiksmes, duoda atsakyma undefined. 