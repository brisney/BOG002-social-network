import { loginUser } from '../firebase/firebaseAuth.js';

export function viewsLogin() {
    const viewsLogin =  /*html*/ `
   

        <form id="formLogin" class="form">
            <h3 class="inicioSesion">Inicio Sesion</h3>
            <input class="input" type="text" placeholder="Ingrese correo" id="emailLogin">
            <input class="input" type="password" placeholder="Ingrese contraseña" id="passwordLogin">
            <button class="buttonContinuar" type="submit">Continuar</button>
            <p class="textoO">O</p>
            <button class="buttonGoogle" id="googleLogin"><span><i class="fab fa-google"></i></span>Ingresar con Google</button>
            <button class="buttonFacebook blue" id="facebookLogin"><span><i class="fab fa-facebook"></i></span>Ingresar con Facebook</button>
            <p class="centrado">¿Quieres ser miembro?<a href="#/Registro">Regístrate</a></p>
        </form>
    `;

    const elementLogin = document.createElement('div');
    elementLogin.innerHTML = viewsLogin;
    return elementLogin;
}

export function loginEvent() {
    const formLogin = document.getElementById('formLogin');
    formLogin.addEventListener('submit', (event) => {
        const emailLogin = document.getElementById('emailLogin').value;
        const passwordLogin = document.getElementById('passwordLogin').value;
        event.preventDefault();
        loginUser(emailLogin.trim(), passwordLogin.trim());
    });
    console.log(firebase);
}