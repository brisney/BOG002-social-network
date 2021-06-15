class myHeader extends HTMLElement {
    constructor() {
            super();
            //console.log('hola mundo')

        }
        //el get templte generamos nuestra etiqueta template
    getTemplate() {
        const template = document.createElement('template')
        template.innerHTML = `
        <header class="header">
        <nav class="nav">
            <a href="#/Home" class="logo nav-link">Marvel</a>
            <button class="nav-toggle">
                <i class="fa fa-bars"></i>
            </button>
            <ul class="nav-menu nav-menu_visible">
                <li class="nav-menu-item"><a href="#/Home" class="nav-menu-link nav-link">Home</a></li>
                <li class="nav-menu-item"><a href="#/login" class="nav-menu-link nav-link">Login</a></li>
                <li class="nav-menu-item"><a href="#/Registro" class="nav-menu-link nav-link">Register</a></li>
            </ul>
        </nav>
    </header>
     ${this.getStyle()}
`;
        return template
    }

    getStyle() {
        return `
       <style>

       *, *:before, *:after{
         margin: 0;
         padding: 0;
         outline: 0;
         box-sizing: border-box;
       }

       .header {
        background: #0769e9;
        height: 80px;
        width: 100%;
        top: 0;
        left: 0;
    }
    
    .nav {
        display: flex;
        justify-content: space-between;
        max-width: 992px;
        margin: 0 auto;
    }
    
    .nav-link {
        color: white;
        text-decoration: none;
    }
    
    .logo {
        font-size: 25px;
        font-weight: bold;
        padding: 0 40px;
        line-height: 80px;
    }
    
    .nav-menu {
        display: flex;
        margin-right: 40px;
        list-style: none;
    }
    
    .nav-menu-item {
        font-size: 18px;
        margin: 0 10px;
        line-height: 80px;
        text-transform: uppercase;
        width: max-content;
    }
    
    .nav-menu-link {
        padding: 8px 12px;
        border-radius: 3px;
    }
    
    .nav-menu-link:hover {
        background: #034574;
        transition: .5s;
    }
    
    .nav-toggle {
        color: white;
        background: none;
        border: none;
        font-size: 30px;
        padding: 0 20px;
        line-height: 60px;
        display: none;
        cursor: pointer;
    }
    
    @media (max-width: 768px) {
        .header {
            background: #0769e9;
            height: 60px;
        }
        .logo {
            font-size: 20px;
            font-weight: bold;
            padding: 0 20px;
            line-height: 60px;
        }
        .nav-menu {
            flex-direction: column;
            align-items: center;
            margin-right: 20px;
            background: #2c3e50;
            position: fixed;
            left: 0;
            top: 60px;
            width: 100%;
            padding: 20px 0;
            height: calc(100% - 60px);
            overflow-y: auto;
            left: 100%;
            transition: left 0.3s;
        }
        .nav-menu-item {
            line-height: 70px;
        }
        .nav-menu-link:hover {
            background: none;
            color: #83c5f7;
        }
        .nav-toggle {
            display: block;
        }
        .nav-menu_visible {
            left: 0;
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


const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible')
})