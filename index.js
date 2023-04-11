const express = require("express")
const rautes = require("./routes/index.js")
const mongoose = require("mongoose")

//Conectar mongo:
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/restapis", {
  useNewUrlParser: true
});

//Crear el servidor:
const app =  express();

//Rutas de la app:
app.use("/", rautes())

//puerto:
app.listen(5000)