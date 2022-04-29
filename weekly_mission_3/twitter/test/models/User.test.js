const User = require('./../../app/models/User')

describe("Pruebas de unidad de usuario", () =>{
    test('Caso de prueba 1: Creacion de User', () =>{
       // expect(3).toBe(10)
        const usuario = new User(10, "Miniempoleon", "Dennis Perez","Bio")
        expect(usuario.id).toBe(10);
        expect(usuario.name).toBe("Dennis Perez")
        expect(usuario.user).toBe("Miniempoleon");
        expect(usuario.bio).toBe("Bio");
    });


    test('Caso de prueba 2: Revision de las fechas deUser', () =>{
        // expect(3).toBe(10)
         const usuario = new User(10, "Miniempoleon", "Dennis Perez","Bio")
         expect(usuario.dateCreated).not.toBeUndefined()
         expect(usuario.lastUpdate).not.toBeUndefined()
     });
})