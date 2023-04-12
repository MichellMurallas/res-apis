const express = require("express")
const routes = require("./routes/index.js")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

//Conectar mongo:
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/restapis", {
  useNewUrlParser: true
});

//Crear el servidor:
const app =  express();

//Habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Rutas de la app:
app.use("/", routes())

//puerto:
app.listen(5000)