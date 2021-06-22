// importamos la funcion que vamos a testear
import { userRegister, loginUser, loginGoogle, loginFacebook  } from '../src/firebase/firebaseAuth';

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
    expect(typeof userRegister).toBe('function');
  });

it('deberia registrarme', () => {
      userRegister('bri@hotmail.com', '123451234').then((userCredential) => {
        expect(typeof userCredential).toBe('object');
        expect(userCredential.correo).toBe('bri@hotmail.com');
        expect(userCredential.contrasena).tobe('123451234');
      });
    });
});

describe('loguin usuario', () => {
  it('debería ser una función', () => {
    expect(typeof loginUser).toBe('function');
  });
it('deberia loguearme', () => {
      return loginUser('bri@hotmail.com', '123451234').then((userCredential) => {
        expect(typeof userCredential).toBe('object');
        console.log(userCredential)
        expect(userCredential.email).toBe('bri@hotmail.com');
      });
    });
});

