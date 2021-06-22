import { savePost, getPost, onGetPost, deletePost, getPostbyId, updatePost } from '../firebase/firebaseStorage.js';

export function viewsPost() {
    const viewsPost = /*html*/ `
    <div class="newFeeds">
        <div>
            <img class="compu" src="./assest/descarga.png" alt="imagen de un compu con emoticones"/>
            <span class="news">NEWSFEED</span>
        </div>
    </div>
    <div class="card">
        <form id="form-Post" class="form-Post">
        <div class="form-group">
            <input type="text" id="post-Title" placeholder="titulo publicacion" class="form-control" autofocus>
        </div>
        <div class="form-group">
            <input id="post-Description" placeholder="Descripcion publicación" class="form-control2">
        </div>
        <div class="box-save">
        <button class="btn-guardar" id="btn-save-post">Guardar</button>
        </div>
        </form>
    </div>
    <div id="post-Container">
    </div>
    `;
    const elementPost = document.createElement('div');
    elementPost.innerHTML = viewsPost;
    return elementPost;
}

export function postEvent() {

    const formPost = document.getElementById('form-Post');
    const postContainer = document.getElementById('post-Container');

    // es false inicialmente porque por defecto el form no va a editar va a guardar
    let editStatus = false;
    let id = '';

    formPost.addEventListener('submit', async(e) => {
        e.preventDefault();

        const title = document.getElementById('post-Title');
        const description = document.getElementById('post-Description');
        if (!editStatus) {
            await savePost(title.value, description.value); //await espera o aguardar
        } else {
            await updatePost(id, {
                title: title.value,
                description: description.value,
            });
            editStatus = false;
            formPost['btn-save-post'].innerText = 'Guardar';
            id = '';
        }

        await getPost();
        formPost.reset();
        title.focus();
        // console.log(title, description);
    });

    // window.addEventListener('DOMContentLoaded', async(e) => {
    // console.log(e);
    // const posts -> querySnapshot (objeto que podemos recorrer)
    // const querySnapshot = await getPost();
    // console.log(posts);
    onGetPost((querySnapshot) => {
        postContainer.innerHTML = '';
        querySnapshot.forEach((doc) => {
            // console.log(doc.data());
            const post = doc.data();
            post.id = doc.id;
            console.log(post); // por consola que datos tiene cada post
            postContainer.innerHTML += /*html*/ `

    <div class="box-inputs">
        <div class="post">
        ${post.title}
        <br>
        ${post.description}
        </div>
        <div class="box-btn">
        <button id="btnBorrar"class="btn-Borrar" data-id="${post.id}">Borrar</button>
        <button id="btnEditar"class="btn-Editar" data-id="${post.id}">Editar</button>
        <button class="like__btn">
        <span id="icon"><i class="far fa-heart"></i></span>
        <span id="count">0</span> Likes
        </button>
        </div>
    </div>
    `;

            const buttonDelete = document.querySelectorAll('.btn-Borrar');
            buttonDelete.forEach((btn) => {
                btn.addEventListener('click', async(e) => {
                    if (window.confirm('Seguro deseas borrar la publicacion?')) {
                        window.alert('¡¡¡Publicacion eliminada!!!');
                        // aqui obtenemos el id de cada publicacion
                        // console.log(e.target.dataset.id);
                        await deletePost(e.target.dataset.id);
                    }
                });
            });

            //BOTON LIKES
            // const likeBtn = document.querySelectorAll(`.like__btn-${doc.id}`);
            // let likeIcon = document.querySelectorAll(`#icon-${doc.id}`);
            // likeIcon.style.display = 'none';
            // let count = document.querySelector('#count');
            //         let clicked = false;

            //         if (!clicked) {
            //             clicked = true;
            //             likeIcon.innerHTML = `<i class="fas fa-heart"></i>`;
            //             count.textContent++;
            //         } else {
            //             clicked = false;
            //             likeIcon.innerHTML = `<i class="far fa-heart"></i>`;
            //             count.textContent--;
            //         }
            //     })
            // })

            //BOTON EDITAR

            const buttonEdit = document.querySelectorAll('.btn-Editar');
            buttonEdit.forEach((btn) => {
                btn.addEventListener('click', async e => {
                    // console.log('Editando Publicaciones');
                    // console.log(e.target.dataset.id);
                    const document = await getPostbyId(e.target.dataset.id);
                    // console.log(document.data());
                    const postEdit = document.data();

                    editStatus = true;
                    id = document.id;

                    // el formulario se llena con esos datos
                    formPost['post-Title'].value = postEdit.title;
                    formPost['post-Description'].value = postEdit.description;
                    formPost['btn-save-post'].innerText = 'Actualizar';
                });
            })
        });
    });
};