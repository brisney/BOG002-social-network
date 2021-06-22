import { logoutUser } from '../firebase/firebaseAuth.js';

export function logoutEvent() {
    const logout = document.getElementById('logout');
    logout.addEventListener('click', e => {
        e.preventDefault();
        logoutUser();
        console.log('sesion cerrada')
        window.location.hash = '#/Home';
    });
}