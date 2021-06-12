import { registroUsuario } from '../firebase/firebaseAuth.js';

export function vistaRegistro() {
    const viewRegistro = `
    <div class="container-registro">
    <h2 class="registro">Bienvenid@s a Universo Marvel</h2>
      <form id="formRegistro">
         <h2 class="crearCuenta">Crear Cuenta</h2> 
         <input type="text" placeholder="Ingresa un correo válido" id="correo">
         <input type="password" placeholder="Crea una Contraseña" id="contrasena">
         <button class="buttonRegistrar">Registrar</button>
         <p class="textoO">O</p>
         <button class="button" id="googleLogin"><span><i class="fab fa-google"></i></span>Registrar con Google</button>
         <p class="centrado">¿Ya eres miembro? <a href="#/login">Inicia Sesión</a></p>
      </form>
      </div>
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