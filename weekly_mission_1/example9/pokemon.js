/*
  export default nos permite exportar esta clase e importara

  import MyLogger from './logger.js'
*/

class Pokemon {
  constructor (name) {
    this.name = name
  }
  sayHello () {
    console.log(`Mi pokemon ${this.name} te saluda`)
  }
  sayMessage (message) {
    console.log(`Mi pokemon ${this.name} dice: ${message}!`)
  }
}
module.exports = Pokemon