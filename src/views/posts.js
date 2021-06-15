import { savePost, getPost, onGetPost, borrarPost, getPostbyId, updatePost } from '../firebase/firebaseStorage.js';

export function vistaPost() {
    const viewsPost = `
  <div class="card">
    <form id="form-Post" class="form-Post">
      <div class="form-group">
        <input type="text" id="post-Title" placeholder="titulo publicacion" class="form-control" autofocus>
      </div>
      <div class="form-group">
        <input id="post-Description" placeholder="Descripcion publicación" class="form-control2">
      </div>
      <div class="box-save">
      <button class="btn-guardar" id="btn-guardar-post">Guardar</button>
      </div>
    </form>
  </div>
  <div id="post-Container">
  </div>
  `;
    const formulario = document.createElement('div');
    formulario.innerHTML = viewsPost;
    return formulario;
}

export function postEvento() {

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
            await savePost(title.value, description.value);
        } else {
            await updatePost(id, {
                title: title.value,
                description: description.value,
            });
            editStatus = false;
            formPost['btn-guardar-post'].innerText = 'Guardar post';
            id = '';
        }

        await getPost();
        formPost.reset();
        title.focus();
        // console.log(title, description);
    });

    window.addEventListener('DOMContentLoaded', async(e) => {
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
                postContainer.innerHTML += `
      
      <div>
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

                const botonBorrar = document.querySelectorAll('.btn-Borrar');
                botonBorrar.forEach((btn) => {
                    btn.addEventListener('click', async(e) => {
                        console.log(e.target.dataset.id); // aqui obtenemos el id de cada publicacion
                        await borrarPost(e.target.dataset.id);
                    });
                });

                //BOTON LIKES
                let contador = 0;
                const botones = document.querySelectorAll('.like_btn');
                botones.forEach((el) => {
                    el.addEventListener('click', contar);
                });

                function contar() {
                    contador++;
                    document.getElementById('count').innerHTML = contador;
                }


                //BOTON EDITAR

                const botonEditar = document.querySelectorAll('.btn-Editar');
                botonEditar.forEach((btn) => {
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
                        formPost['btn-guardar-post'].innerText = 'Actualizar';
                    });
                })
            });
        });
    });

}