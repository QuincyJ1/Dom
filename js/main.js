console.clear();



const buttonDOM = document.getElementById('mygtukas');
const titleDOM = document.getElementById('antraste');





function kaDaryti () {
    titleDOM.textContent = 'Labas vakaras!';
}

buttonDOM.addEventListener('click', kaDaryti);
