import { userRegister } from '../firebase/firebaseAuth.js';

export function viewsRegister() {
    const viewRegistro = /*html*/ `
    <form class="form" id="formRegister">
        <h2 class="crearCuenta">Crear Cuenta</h2>
        <input class="input" type="text" placeholder="Ingresa un nombre de usuario" id="nickname">
        <input class="input" type="text" placeholder="Ingresa un correo válido" id="email">
        <input class="input" type="password" placeholder="Crea una Contraseña" id="password">
        <button class="buttonRegistrar">Registrar</button>
        <p class="textoO">O</p>
        <button class="buttonGoogle" id="googleLogin"><span><i class="fab fa-google"></i></span>Registrar con Google</button>
        <p class="centrado2">¿Ya eres miembro? <a href="#/login">Inicia Sesión</a></p>
    </form>
 `;
    const elementRegister = document.createElement('div');
    elementRegister.innerHTML = viewRegistro;
    return elementRegister;
}
export function registerEvent() {
    const formRegister = document.getElementById('formRegister');
    formRegister.addEventListener('submit', (event) => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const nickname = document.getElementById('nickname').value;
        reset();
        event.preventDefault();
        userRegister(email.trim(), password.trim(), nickname.trim());
    });
}