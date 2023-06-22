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
    let HTML = '';
   for (let i =0 ; i < size; i++){
    if (i % 2 === 0) {
    HTML += `<div class="row">`
    for (let j = 0; j < size; j++) {
        if (j % 2 === 0){
        HTML += '<div class="cell black"></div>';
        } else {
            HTML += '<div class="cell"></div>';
        }
    }
                  HTML +=  '</div>';
    } else {
         HTML += `<div class="row">`
        for (let j = 0; j < size; j++) {
            if (j % 2 === 0){
                HTML += '<div class="cell"></div>';
                } else {
                    HTML += '<div class="cell black"></div>';
                }
        }
                      HTML +=  '</div>';
    }
   }
   boardDOM.innerHTML = HTML;
}

renderChessBoard(4);

//jeigu neduoda funkcijai jokios reiksmes, duoda atsakyma undefined. 