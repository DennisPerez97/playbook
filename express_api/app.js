const express = require('express')
const app = express()
app.use(express.json()) //indicamos que usaremos JSON
const port = 3000 //localhost:3000

///necesito crear los routes
///Methods HTTP: GET,POST,PUT,DELETE

app.get('/v1/explorers',(req,res) => {
    console.log(`GET Explorer V1 API ${new Date()}`)

    const explorer1 = {id:1,name:"Explorer1"}
    const explorer2 = {id:2,name:"Explorer2"}
    const explorers = {explorer1,explorer2}

    /// HTTP CODE STATUS: 200(exitoso)
    res.status(200).json(explorers)

})

app.get('/v1/explorers/:id',(req,res) => {

    const explorer1 = {id:1,name:"Explorer1"}
    const explorer2 = {id:2,name:"Explorer2"}
    const explorers = {explorer1,explorer2}
    let result
    Object.entries(explorers).forEach(key => {
        if(key[1].id == req.params.id)
        result= key[1]
    })
    console.log(result)
    /// HTTP CODE STATUS: 200(exitoso)
    res.status(200).json(result)

})

app.post("/v1/explorers",(req,res) =>{
    console.log(`POST Explorer V1 API ${new Date()}`) //prueba esta parte en postman
    console.log(req.body)
    res.status(201).json({message:"Creado exitosamente"}) /// en post en exitoso se crea nueva entidad es el 201
})

app.put("/v1/explorers/:id",(req,res) =>{
    console.log(`PUT Explorer V1 API ${new Date()}`) //prueba esta parte en postman
    console.log(req.body)
    console.log(req.params.id)
    res.status(200).json({message:"Actualizado exitosamente"}) /// un put exitoso es el 200
})

app.delete("/v1/explorers/:id",(req,res) =>{
    console.log(`DELETE Explorer V1 API ${new Date()}`) //prueba esta parte en postman
    console.log(req.body)
    console.log(req.params.id)
    res.status(200).json({message:"Se elimino exitosamente"}) /// un put exitoso es el 200
})

///localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
