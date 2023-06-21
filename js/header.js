function renderHeader(isHomePage) {    // rasai kad zinotum kuris
    const bodyDOM = document.body;  // taip galima tik i body ir head.
    const HTML =  `<header>
                        <a href="${isHomePage ? './' : '../'}./list/">List</a>
                        <a href="${isHomePage ? './' : '../'}/clicker/">Clicker</a>
                        <a href="${isHomePage ? './' : '../'}/">Home</a>
                        <a href="${isHomePage ? './' : '../'}/chess/">Chess</a>
            </header>`
    
    // headerHTML += bodyDOM.innerHTML;   tada headeris bus priekyje html. Jei parasysi kitaip, bus po viso html kodo. BET NERA GERAS BUDAS. GERESNIS YRA insertAdjacentHTML:
    
    bodyDOM.insertAdjacentHTML('afterbegin', HTML); // pirma reiksme skliaustuose: kur ideti (yra 4 galimi variantai), antra reiksme ka ideti. NAUDOT SITA VARIANTA KURIANT NAUJA TURINI. 
}


export { renderHeader }; // taip geriausia eksportuot







