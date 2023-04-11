const express = require("express")
const rautes = require("./routes/index.js")

//Crear el servidor:
const app =  express();

//Rutas de la app:
app.use("/", rautes())

//puerto:
app.listen(5000)