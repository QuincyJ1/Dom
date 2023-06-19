console.clear();


// Paspaudus <button>, <h1> elemente pasikeicia tekstas.

// 1. Susirasti <button> elementa
// 2. jei <button> elementas yra:
// - susirandam h1 elementa. 
// jei h1 elementas yra:
// uzregistruojama ivykio stebejima:
  // - kai/jei vartotojaas paspaus button
  // -  h1 elemente keiciam teksta.
  
// - jei nera:
// - nieko nedarom.

const buttonDOM = document.getElementById('mygtukas');
// jei neranda objekto, grazina null. 
if (buttonDOM !== null) {
    console.log('Mygtukas rastas')

    const titleDOM = document.getElementById('antraste');
   
    
    if (titleDOM === null) {
        console.log('Nepavyko rast antrastes')
    } else {
        console.log('Antraste egzistuoja');

        titleDOM.textContent = 'Labas vakaras!';
    }
} else {
    console.log('Mygtuko nera');


}

