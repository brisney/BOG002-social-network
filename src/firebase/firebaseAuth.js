// registro de usuario
export const userRegister = (email, password) => {
    console.log(email, password);
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            console.log('Usuario registrado', userCredential.user);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Te has Registrado con éxito',
                showConfirmButton: false,
                timer: 2500
            })
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario ya registrado pruebe con otro',
                footer: '<a href="#/login">¿Deseas Iniciar Sesión?</a>'
            })
        });
};

export const registerUserGmail = () => {
    firebase.auth()
        .createUserWithEmailAndPassword(correo, contrasena)
        .then((userCredential) => {
            // Signed in
            console.log('Usuario registrado', userCredential.user);
            Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Te has Registrado con éxito',
                    showConfirmButton: false,
                    timer: 2500
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Usuario ya registrado pruebe con otro',
                        footer: '<a href="#/login">¿Deseas Iniciar Sesión?</a>'
                    })
                });
        })
}

// Login con email
export const loginUser = (email, password) => {
    console.log(email, password);
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.hash = '#/post';
            // Signed in
            console.log('Usuario logueado', userCredential.user);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Te has Logueado con éxito',
                showConfirmButton: false,
                timer: 2500
            })
            return userCredential;
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No estas registrado',
                footer: '<a href="#/Register">¿Deseas Registrarte?</a>'
            })
        });
};
// observador de estado de autenticación y obtén datos del usuario
export const verificarUsuario = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log('si existe usuario', user)
                // window.location.hash = '#/login';
        } else {
            console.log('Ojo usuario no existe');
        }
    })
}

export const logoutUser = () => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            console.log('Sesion Cerrada');
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo cerrar sesión'
            })
        })
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
                window.location.hash = '#/post';
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Te has Logueado con éxito',
                    showConfirmButton: false,
                    timer: 2500
                })
                return result;
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No estas registrado',
                    footer: '<a href="#/Register">¿Deseas Registrarte?</a>'
                })
            });
    });
}

// logeo con Facebook
export function loginFacebook() {
    const facebookButton = document.getElementById('facebookLogin');
    facebookButton.addEventListener('click', (e) => {
        e.preventDefault();
        const provider = new firebase.auth.FacebookAuthProvider(); //Provider es proveedor
        firebase.auth().signInWithPopup(provider)
            .then(() => {
                window.location.hash = '#/post';
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Te has Logueado con éxito',
                    showConfirmButton: false,
                    timer: 2500
                }).catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No estas registrado',
                        footer: '<a href="#/Register">¿Deseas Registrarte?</a>'
                    })
                });
            })
    })
}

export function likesPost(idLike, count) {
    const likeUser = db.collection('likes').doc()
    return likeUser.update({
            likes: count,
        })
        .then(() => {

        }).catch((error) => error);
}



// export const savePost = (title, description) => {
//   const db = firebase.firestore();
//   db.collection('Publicaciones').doc().set({
//     title,
//     description,
//   });
// }