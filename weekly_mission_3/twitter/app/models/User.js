class User {
    constructor(id,user,name,bio){
        this.id = id
        this.user = user
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdate = this.dateCreated
    }
}
module.exports = User