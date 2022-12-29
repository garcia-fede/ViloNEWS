const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: " ",
    database: "vilonews"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/insert",(req, res)=> {
    const titulo = req.body.titulo
    const info = req.body.info
    const categoria = req.body.categoria

    const sqlInsert = "INSERT INTO noticias (titulo, info, categoria) VALUES (?,?,?)"
    db.query(sqlInsert,[titulo,info,categoria],(err, result)=>{
        res.send("Realice un query a la bd")
    })
})

app.get("/api/get",(req,res)=>{
    const sqlNoticias = "SELECT * FROM noticias"
    db.query(sqlNoticias,(err,result)=>{
        res.send(result)
    })
})

var PORT = 3001;
//https://localhost:3001
app.listen(PORT,()=>{
    console.log("Running on port 3001")
})