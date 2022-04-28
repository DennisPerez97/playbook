console.log("POO")

//Objeto de js
const woopaant = {
    name:"Woopa",
    mission: "Node JS",
    age:"12",
    color:"pink"
    }

class Ajolonauta{
    constructor(name,mission,age,color){
        this.name=name,
        this.mission=mission,
        this.age=age,
        this.color=color
}
        sayHello(){
            return `${this.name} is Saying Hello!`
        }
    
}
class Pokemon {
    constructor(name){
        this.name=name
    }
}

// Objeto de JS

const pikachu = new Pokemon("Pikachu")
console.log(pikachu.sayHello())

const woopa_obj_js = {}
console.log(woopa_obj_js)

const woopa = new Ajolonauta("Woopa", "Node JS", 18, "Pink")
console.log(woopa)


const wooper = new Ajolonauta("Wooper", "Jaba", 18, "Blue")
console.log(wooper)