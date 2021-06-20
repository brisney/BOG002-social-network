// import { loginEvent } from '../views/login.js';
import { viewsHome } from '../views/home.js';
import { viewsRegister, registerEvent } from '../views/register.js';
import { viewsLogin, loginEvent } from '../views/login.js';
import { logoutEvent } from '../views/logout.js';
import { loginGoogle, loginFacebook } from '../firebase/firebaseAuth.js';
import { viewsPost, postEvent } from '../views/posts.js';

const content = document.getElementById('root');

const router = (route) => {
    content.innerHTML = '';
    // observador de estado de autenticación y obtén datos del usuario
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            console.log('si existe usuario',user)
            // window.location.hash = '#/login';
            // postEvento()
        }else {
            console.log('No hay usuario logueado');
            // loginEvento()
        }
    })

    switch (route) {
        case '':
            content.appendChild(viewsHome());
            break;
        case '#/Home':
            content.appendChild(viewsHome());
            logoutEvent();
            break;
        case '#/Registro':
            content.appendChild(viewsRegister());
            registerEvent();
            break;
        case '#/login':
            content.appendChild(viewsLogin());
            loginEvent();
            loginGoogle();
            loginFacebook();
            break;
        case '#/Logout':
            content.appendChild(viewsHome()); 
            logoutEvent();
            break;
        case '#/post':
            content.appendChild(viewsPost());
            postEvent();
            break;
        default:
            console.log('Error 404');
    }
};

export { router };