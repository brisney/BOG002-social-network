// importamos la funcion que vamos a testear
import { registroUsuario, loginUsuario, loginGoogle, loginFacebook  } from '../src/firebase/firebaseAuth';

const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockAuthentication();
const mocksdk = new firebasemock.MockFirebaseSdk(
  () => {
    return null;
  },
  () => {
    return mockauth;
  }
);
mockauth.autoFlush();
global.firebase = mocksdk;


describe('registro Usuario', () => {
  it('debería ser una función', () => {
    expect(typeof registroUsuario).toBe('function');
  });

it('deberia registrarme', () => {
      registroUsuario('bri@hotmail.com', '123451234').then((userCredential) => {
        expect(typeof userCredential).toBe('object');
        expect(userCredential.correo).toBe('bri@hotmail.com');
        expect(userCredential.contrasena).tobe('123451234');
      });
    });
});

describe('loguin usuario', () => {
  it('debería ser una función', () => {
    expect(typeof loginUsuario).toBe('function');
  });
it('deberia loguearme', () => {
      return loginUsuario('bri@hotmail.com', '123451234').then((userCredential) => {
        expect(typeof userCredential).toBe('object');
        console.log(userCredential)
        expect(userCredential.email).toBe('bri@hotmail.com');
      });
    });
});

describe('Login con google', () => {
  it('debería ser una función', () => {
    expect(typeof loginGoogle).toBe('function');
  });

  it.only('deberia loguearme con Gmail', () => {
    const promesa = loginGoogle()
    return promesa
      .then((result) => {
        expect(typeof result).toEqual('object');
      })
  })
});

describe('Login con facebook', () => {
  it('debería ser una función', () => {
    expect(typeof loginGoogle).toBe('function');
  });

  it('deberia loguearme con facebook', () => {
    const promesa = loginFacebook()
    return promesa
      .then(() => {
        expect(typeof loginFacebook()).toBe('object');
      })
  })
});