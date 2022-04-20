console.log("Creacion de oun objeto con propiedades")

const myObject = {
    name:"Dennis",
    age:27,
    mission: "Node JS",
    stack:["JS","Node", "React","vue"],
    blog: {
        url:"dennis.com",
        posts:5,
    }
}

console.log(myObject)

console.log("Accediendo a las propiedaeds del objeto")
console.log(myObject.stack[2])

const ajolonauta = {
    name:"Woopa",
    mission:"Node JS",
    sayHelloToExplorer: function(){
        console.log("Soy el ajolonauta")
        return "fin de say"
    },
    tellMeMore:function(){
        console.log(`Hola soy ${this.name} y tengo la mision ${this.mission}`)
        return "Fin de tellmemore"
    }
}
console.log("Ajolonauta")
console.log(ajolonauta.sayHelloToExplorer())
console.log("dime mas")
console.log(ajolonauta.tellMeMore())