class myHeader extends HTMLElement {
    constructor() {
            super();
            //console.log('hola mundo')

        }
        //el get templte generamos nuestra etiqueta template
    getTemplate() {
        const template = document.createElement('template')
        template.innerHTML = `
       <nav>
       <ul>
        <li><a href="#/Home">Home</a></li>
        <li class="cambio"><a href="#/Registro">Register</a></li>
        <li class="cambio"><a class="active" href="#/login">Login</a></li>
      </ul>
       </nav>
       ${this.getStyle()}
`;
        return template
    }

    getStyle() {
        return `
         <style>
         *{
            margin: 0;
            padding:0;
         }
         ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
          }
          
          li {
            float: left;
          }
          
          li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
          }
          
          li a:hover:not(.active) {
            background-color: #111;
          }

          .cambio{
            float:right
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