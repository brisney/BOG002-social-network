export function viewsHome() {
    const viewHome =  /*html*/ `
    <div class="home bd-grid">
        <div class="home__data">
            <h1 class="home__title">Welcome to the</h1>
            <span class="marvel-title">Marvel Universe</span>
            <p>En este párrafo se supone que explicaremos de que se trata 
            nuestro proyecto</p>
            <span>pero mientras se nos ocurre algo este texto se quedará ahí.</span>
        </div>
    <div class="home__img">
    <img classs="image" src="./assest/thor.png" alt="imagen de thor">
    </div>
   </div>
    `;

    const elementHome = document.createElement('div');
    elementHome.innerHTML = viewHome;
    return elementHome;
}