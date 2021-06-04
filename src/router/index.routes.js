// import { loginEvent } from '../views/login.js';
import { vistaHome } from '../views/home.js';
import { vistaRegistro, registroEvento } from '../views/registro.js';
import { vistaLogin, loginEvento } from '../views/login.js';
import { logoutEvento } from '../views/logout.js';
import { loginGoogle } from '../firebase/firebaseAuth.js';

const content = document.getElementById('root');

const router = (route) => {
    content.innerHTML = '';
    switch (route) {
        case '':
            content.appendChild(vistaHome());
            break;
        case '#/Home':
            content.appendChild(vistaHome());

            break;
        case '#/Registro':
            content.appendChild(vistaRegistro());
            registroEvento();
            break;
        case '#/login':
            content.appendChild(vistaLogin());
            loginEvento();
            loginGoogle();
            break;
        case '#/logout':
            logoutEvento();
            break;
        default:
            console.log('Error 404');
    }
};

export { router };