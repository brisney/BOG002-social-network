class myHeader extends HTMLElement {
    constructor() {
            super();
            //console.log('hola mundo')

        }
        //el get templte generamos nuestra etiqueta template
    getTemplate() {
        const template = document.createElement('template')
        template.innerHTML = `
      <nav class="menu">
      <label class="logo">Marvel</label>
      <ul class="menu_items">
          <li><a href="#/Home">Home</a></li>
          <li><a href="#/login">Login</a></li>
          <li><a href="#/Registro">Register</a></li>
          <li><a href="#/Logout" id="logout">Logout</a></li>
      </ul>
      <span class="btn-menu">
          <i class="fa fa-bars"></i>
      </span>
  </nav>
     ${this.getStyle()}
`;
        return template
    }

    getStyle() {
        return `
       <style>
.menu {
  background-color: #e9183b;
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
  box-shadow: 5px 0 10px rgba(0, 0, 0, .6);
}

.logo {
  color: white;
  font-size: 45px;
  padding: 0 80px;
  font-weight: bold;
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
  padding: 7px;
  text-decoration: none;
  font-size: 18px;
  display: block;
  text-transform: uppercase;
  color: rgba(252, 239, 250, 1);
}

.menu_items li:hover {
  background: rgba(0, 0, 0, .3);
  transition: .4s;
}

.btn-menu {
  margin-right: 30px;
  font-size: 25px;
  color: #fff;
  cursor: pointer;
  display: none;
}

ul>.show {
  top: 65px;
}

@media screen and (min-width: 360px){
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .menu{
    width: 100%
  }
}

@media screen and (max-width: 952px) {
  .logo {
      font-size: 30px;
      padding-left: 35px;
  }
  .menu_items li a {
      font-size: 16px;
  }
}

@media screen and (max-width: 858px) {
  .menu {
      height: 65px;
  }
  .btn-menu {
      display: inline-flex;
  }
  .menu_items {
      position: fixed;
      width: 100vh;
      height: calc(100% -65px);
      background: #414141;
      top: -100vh;
      text-align: center;
      transition: all .4s;
      flex-direction: column;
  }
  .menu_items li {
      margin: 30px 0 0 0;
      line-height: 30px;
  }
  .menu_items li:hover {
      background: none;
  }
  .menu_items li a {
      font-size: 20px;
      color: rgba(252, 239, 250, 1);
      font-weight: bold;
  }
  .menu_items li a:hover {
      color: #e9183b;
  }
  .logo {
      font-size: 25px;
      padding-left: 35px;
  }
}

@media screen and (max-width: 858px) and (orientacion: landscape) {
  .menu_items li {
      margin: 5px 0 0 0;
  }
  .menu_items {
      overflow: scroll;
      height: calc(100% -65px);
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