// import { db } from './firebaseConfig.js';

const db = firebase.firestore();

export const savePost = (title, description) => {
  db.collection('Publicaciones').doc().set({
    title,
    description,
  });
};

// funcion que trae todas las publicaciones de una collection
export const getPost = () => db.collection('Publicaciones').get();

// funcion que actualiza cada vez que existen cambios
export const onGetPost = (callback) => db.collection('Publicaciones').onSnapshot(callback);

// funcion que elimina las publicaciones
export const borrarPost = (id) => db.collection('Publicaciones').doc(id).delete();

// funcion  que obtiene una publicacion por id
export const getPostbyId = (id) => db.collection('Publicaciones').doc(id).get();

// funcion que actualiza con id del post y el post actualizado
export const updatePost = (id, postActualizado) => db.collection('Publicaciones').doc(id).update(postActualizado);
