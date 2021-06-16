// importamos la funcion que vamos a testear
import { registroUsuario } from '../src/firebase/firebaseAuth';

describe('registroUsuario', () => {
  it('debería ser una función', () => {
    expect(typeof registroUsuario).toBe('function');
  });
  it.only('debería registrarme', () => {
   const promesa = registroUsuario('bris@hotmail.com', '2356789');
   console.log(promesa)
    // expect(typeof registroUsuario).toBe('function');
  });
});
