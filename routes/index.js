const express = require("express")
const router = express.Router();

module.exports = function (){

  router.get("/", (req, res)=>{
    res.send("inicio")
  });

  router.get("/nosotros", (req, res)=>{
    res.send("Somos nosotros, en qué te podemos servir?")
  });




  return router
}