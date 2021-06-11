export function vistaHome() {
    const viewHome = `
    <div class="container">
    <h2 class="welcome">Welcome to the</h2>
    <h1 class="principal">Universo Marvel</h1> 
    <p>En este párrafo se supone que explicaremos de que se trata 
    nuestro proyecto</p>
    <span>pero mientras se nos ocurre algo este texto se quedará ahí.</span>
    </div>
    `;

    const elementoHome = document.createElement('div');
    elementoHome.innerHTML = viewHome;
    return elementoHome;
}