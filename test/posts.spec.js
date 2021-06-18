import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    publicaciones: {
      __doc__: {
        abc1d: {
          title: 'hola mundo',
          description: 'como esta',
        //   complete: false
        },
      }
    }
  }
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
// const db = firebase.firestore();
// global.db = firebase.firestore();

import { savePost, getPost, borrarPost } from '../src/firebase/firebaseStorage.js';

describe('lista de publicaciones', () => {
    it('Debería guardar un post', () => {
      return savePost('hola') 
        .then(() => getPost(
          (data) => {
            const result = data.find((publicaciones) => publicaciones.title === 'hola mundo');
            const resultado = data.find((publicaciones) => publicaciones.description === 'como esta');
            expect(result.title).toBe('hola');
         }));

        });
});