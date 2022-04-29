const User = require('./../../app/models/User')

describe("Pruebas de unidad de usuario", () =>{
    test('Caso de prueba 1: Creacion de objeto', () =>{
       // expect(3).toBe(10)
        const usuario = new User(10, "Miniempoleon", "Dennis Perez","Bio")
        expect(usuario.id).toBe(10);
        expect(usuario.name).toBe("Dennis Perez")
        expect(usuario.user).toBe("Miniempoleon");
        expect(usuario.bio).toBe("Bio");
        expect(usuario.dateCreated).toBe(new Date())
    });
})