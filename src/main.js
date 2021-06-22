// Este es el punto de entrada de tu aplicacion

import { router } from './router/index.routes.js';

router(window.location.hash); //devuelve la parte de anclaje de una URL
window.addEventListener('hashchange', () => { //hashchange => la URL ha cambiado
    router(window.location.hash);
});