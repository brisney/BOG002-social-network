class myHeader extends HTMLElement {
    constructor() {
            super();
            //console.log('hola mundo')

        }
        //el get templte generamos nuestra etiqueta template
    getTemplate() {
        const template = document.createElement('template')
        template.innerHTML = /*html */ `
        <nav class="menu">
        <label class="logo"><a class="marvel" href="#/Home">MARVEL</a></label>
        <ul class="menu_items">
            <li class="active"><a href="#/Home" class="texto-rojo">Home</a></li>
            <li><a href="#/login" class="texto-rojo">Login</a></li>
            <li><a href="#/Register" class="texto-rojo">Register</a></li>
            <li><a href="#/logout" class="texto-rojo" id="logout">Logout</a></li>
        </ul>
        <span class="btn_menu">
            <i class="fas fa-bars"></i>
        </span>
    </nav>
    ${this.getStyle()}
`;
        return template
    }

    getStyle() {
        return /*css*/ `
    <style>

    .menu {
        background-color: #000000;
        height: 75px;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #fff;
        box-shadow: 5px 0 10px rgba(0, 0, 0, .6);
    }

    .logo {
        color: #fff;
        font-size: 35px;
        padding: 0 80px;
        font-weight: bold;
        font-family: 'Lato', sans-serif;
    }

    .texto-rojo:hover {
        color: #e9183b;
        font-family: 'Lato', sans-serif;
    }

    .menu_items {
        display: flex;
        list-style: none;
        margin-right: 30px;
    }

    .menu_items li {
        border-radius: 3px;
        margin: 0 5px;
    }

    .menu_items li a {
        padding: 7px 13px;
        text-decoration: none;
        font-size: 18px;
        display: block;
        text-transform: uppercase;
        color: #fff;
        font-family: 'Lato', sans-serif;
    }

    .menu_items li:hover,
    li.active {
        color: red;
        transition: .4s;
    }

    .btn_menu {
        margin-right: 30px;
        font-size: 25px;
        color: #fff;
        cursor: pointer;
        display: none;
    }

    ul.show {
        top: 65px;
    }

    .marvel {
        text-decoration: none;
        color: #fff;
        cursor: pointer;
    }

    @media screen and (max-width: 952px) {
        .logo {
            font-size: 30px;
            padding-left: 35px;
            font-family: 'Lato', sans-serif;
        }
        .menu_items li a {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 858px) {
        .menu {
            height: 65px;
        }
        .btn_menu {
            display: inline-flex;
        }
        .menu_items {
            position: fixed;
            width: 100vw;
            height: calc(100% - 65px);
            background: #414141;
            top: -100vh;
            text-align: center;
            transition: all .4s;
            flex-direction: column;
        }
        .menu_items li {
            margin: 30px 0 0 0;
            line-height: 30px;
            font-family: 'Lato', sans-serif;
        }
        .menu_items li:hover {
            background: none;
        }
        .menu_items li a {
            font-size: 20px;
            color: #fff;
            font-weight: bold;
            font-family: 'Lato', sans-serif;
        }
        .menu_items li a:hover {
            color: #e9183b;
        }
        .logo {
            font-size: 25px;
            padding-left: 35px;
            font-family: 'Lato', sans-serif;
        }
    }


    </style>
    `
    }

    render() {
        //si solo ponemos true nos renderizara todas las etiquetas si ponemos false
        //nos mostrara solo el nav
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}




//el define para poder darle el nombre a la etiqueta html y de que clase viene
//el define recibe 2 parámetros:
//el primero el nombre de nuestra etiqueta y como regla debe de tener minimo 2 palabras separadas de un -
//y el segundo parámetro el nombre de nuestra clase
customElements.define("my-header", myHeader);

document.addEventListener('click', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})