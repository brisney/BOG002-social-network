import { loginUsuario } from '../firebase/firebaseAuth.js';

export function vistaLogin() {
    const viewsLogin = `
   

        <form id="formLogin" class="form">
            <h3 class="inicioSesion">Inicio Sesion</h3>
            <input class="input" type="text" placeholder="Ingrese correo" id="correoLogin">
            <input class="input" type="password" placeholder="Ingrese contraseña" id="contrasenaLogin">
            <button class="buttonContinuar" type="submit">Continuar</button>
            <p class="textoO">O</p>
            <button class="buttonGoogle" id="googleLogin"><span><i class="fab fa-google"></i></span>Ingresar con Google</button>
            <button class="buttonFacebook blue" id="facebookLogin"><span><i class="fab fa-facebook"></i></span>Ingresar con Facebook</button>
            <p class="centrado">¿Quieres ser miembro?<a href="#/Registro">Regístrate</a></p>
        </form>
    `;

    const formularioLogin = document.createElement('div');
    formularioLogin.innerHTML = viewsLogin;
    return formularioLogin;
}

export function loginEvento() {
    const formLogin = document.getElementById('formLogin');
    formLogin.addEventListener('submit', (event) => {
        const correoLogin = document.getElementById('correoLogin').value;
        const contrasenaLogin = document.getElementById('contrasenaLogin').value;
        event.preventDefault();
        loginUsuario(correoLogin.trim(), contrasenaLogin.trim());
    });
    console.log(firebase);
}