// registro con email

export const registroUsuario = (correo, contrasena) => {
    console.log(correo, contrasena);
    firebase.auth().createUserWithEmailAndPassword(correo, contrasena)
        .then((userCredential) => {
            console.log('registrado', userCredential);
        })
        .catch((error) => {
            console.log('error', error.message);
        });
};

// Login con email
export const loginUsuario = (correo, contrasena) => {
    console.log(correo, contrasena);
    firebase.auth().signInWithEmailAndPassword(correo, contrasena)
        .then((userCredential) => {
            // Signed in
            console.log('logueado', userCredential);
        })
        .catch((error) => {
            console.log('error', error);
        });
};

// logeandonos con google
export function loginGoogle() {
    const googleButton = document.getElementById('googleLogin');
    googleButton.addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    });
}


// logeamos con Facebook
export function loginFacebook() {
    const facebookButton = document.getElementById('facebookLogin');
    facebookButton.addEventListener('click', () => {
        //e.preventDefault();
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                console.log(result)
                console.log('facebook sin ing');
            })
            .catch((err) => {
                console.log(err);
            })
    })
}