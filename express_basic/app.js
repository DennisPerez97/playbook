const express = require('express')
const app = express()
const port = 3000 //localhost:3000

///localhost:3000
app.get('/', (req,res) => {
    res.send("Hola Explorers")
})

app.get('/launchx',(req,res) =>{
    res.send("ola")
})

app.get('/node',(req,res) =>{
    const explorer1 = {
        id:1,
        name: "exporer",
    }
    const explorer2 = {
        id:1,
        name: "exporer",
    }
    const explorer3 = {
        id:1,
        name: "exporer",
    }
    res.send([explorer1, explorer2,explorer3])
})

//localhost/explorer/carlogilmar
app.get('/explorer/:explorer',(req,res) =>{
    console.log(req.params)
    res.send(req.params)

})


app.listen(port,() => {
    console.log("Server listo")
})