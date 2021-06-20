// registro de usuario
export const userRegister = (email, password) => {
    console.log(email, password);
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            console.log('Usuario registrado', userCredential.user);
            // ...
        })
        .catch((error) => {
            console.log('error', error.message);
            // ..
        });
};

// Login con email
export const loginUser = (email, password) => {
    console.log(email, password);
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.hash = '#/post';
            // Signed in
            console.log('Usuario logueado', userCredential.user);
            // ...
        })
        .catch((error) => {
            console.log('ups ha ocurrido un error', error.message);
        });
};

export const logoutUser = () => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            console.log('Sesion Cerrada');
        })
        .catch((error) => {
            console.log('ups ha ocurrido un error', error.message);
        });
};

// logeo con google
export function loginGoogle() {
    const googleButton = document.getElementById('googleLogin');
    googleButton.addEventListener('click', () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                window.location.hash = '#/post';
            })
            .catch((err) => {
                console.log(err);
            });
    });
}

// logeo con Facebook
export function loginFacebook() {
    const facebookButton = document.getElementById('facebookLogin');
    facebookButton.addEventListener('click', (e) => {
        e.preventDefault();
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                window.location.hash = '#/post';
            })
            .catch((err) => {
                console.log(err);
            })
    })
}
