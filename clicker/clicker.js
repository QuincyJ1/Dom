

const formDOM = document.querySelector('form')
const minus3DOM = formDOM.querySelector('button')
const minusDOM = formDOM.querySelector('button:nth-child(2')
const numberDOM = formDOM.querySelector('div');
const plusDOM = formDOM.querySelector('button:nth-child (3)');
const plus3DOM = formDOM.querySelector('button:last-child');
// taip greiciau rasi reikiamus elementus. ('') irasai css selectoriu, kuri elemeenta nori paimt. 

// onst plusDOM = formDOM.querySelector('button')[1]; --- randa reikiama elementa.

let counter = 0;

plusDOM.addEventListener('click', (event) => {
    event.preventDefault(); //preventinam defaultine formos veikima (defaulte refreshina po paspaudimo)
console.log('plius')
   
  numberDOM.textContent = ++counter;
})

minusDOM.addEventListener('click', (event) => {
    event.preventDefault(); //preventinam defaultine formos veikima (defaulte refreshina po paspaudimo)
    console.log('minus')
   
   numberDOM.textContent = --counter;
})



