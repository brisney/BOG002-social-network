// registro con email

export const registroUsuario = (correo, contrasena) => {
    console.log(correo, contrasena);
    return firebase
        .auth()
        .createUserWithEmailAndPassword(correo, contrasena)
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
export const loginUsuario = (correo, contrasena) => {
    console.log(correo, contrasena);
    return firebase
        .auth()
        .signInWithEmailAndPassword(correo, contrasena)
        .then((userCredential) => {
            window.location.hash = '#/post';
            console.log('Usuario logueado', userCredential.user);
            // Signed in
            // console.log('Usuario logueado', userCredential.user);
            // ...
        })
        .catch((error) => {
            console.log('error', error.message);
        });
};

export const logoutUsuario = (correo, contrasena) => {
    console.log(correo, contrasena);
    firebase
        .auth()
        .signOut()
        .then(() => {
            console.log('Sesion Cerrada');
        });
};

// logeandonos con google
export function loginGoogle() {
    const googleButton = document.getElementById('googleLogin');
    googleButton.addEventListener('click', () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        return firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                window.location.hash = '#/posts';
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
                console.log(result);
                console.log('facebook sin ing');
            })
            .catch((err) => {
                console.log(err);
            })
    })
}



// export const savePost = (title, description) => {
//   const db = firebase.firestore();
//   db.collection('Publicaciones').doc().set({
//     title,
//     description,
//   });
// }