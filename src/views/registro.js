import { registroUsuario, loginGoogle } from '../firebase/firebaseAuth.js';

export function vistaRegistro() {
    const viewRegistro = `
    <form class="form" id="formRegistro">
        <h2 class="crearCuenta">Crear Cuenta</h2>
        <input class="input" type="text" placeholder="Ingresa un correo válido" id="correo">
        <input class="input" type="password" placeholder="Crea una Contraseña" id="contrasena">
        <button class="buttonRegistrar">Registrar</button>
        <p class="textoO">O</p>
        <button class="buttonGoogle" id="googleLogin"><span><i class="fab fa-google"></i></span>Registrar con Google</button>
        <p class="centrado2">¿Ya eres miembro? <a href="#/login">Inicia Sesión</a></p>
    </form>
 `;
    const formularioRegistro = document.createElement('div');
    formularioRegistro.innerHTML = viewRegistro;
    return formularioRegistro;
}
export function registroEvento() {
    const formRegistro = document.getElementById('formRegistro');
    formRegistro.addEventListener('submit', (event) => {
        const correo = document.getElementById('correo').value;
        const contrasena = document.getElementById('contrasena').value;
        event.preventDefault();
        registroUsuario(correo.trim(), contrasena.trim());
    });
}
export function EventRegisterLogin() {
    const googleButton = document.getElementById('googleLogin');
      console.log("fuera del contenedor")
      googleButton.addEventListener('click', loginGoogle())
    
    //   return formuarioRegistro;
    }