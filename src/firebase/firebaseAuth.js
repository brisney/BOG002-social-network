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
            // Signed in
            console.log('Usuario logueado', userCredential.user);
            return userCredential
            // ...
        })
        .catch((error) => {
            console.log('ups ha ocurrido un error', error.message);
            return error
        });
};
// observador de estado de autenticación y obtén datos del usuario
export const verificarUsuario = () => {
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            console.log('si existe usuario',user)
            // window.location.hash = '#/login';
        }else {
            console.log('Ojo usuario no existe');
        }
    })
}

export const logoutUsuario = () => {
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
                window.location.hash = '#/post';
            })
            .catch((err) => {
                console.log(err);
            });
    });
}

// logeamos con Facebook
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



// export const savePost = (title, description) => {
//   const db = firebase.firestore();
//   db.collection('Publicaciones').doc().set({
//     title,
//     description,
//   });
// }