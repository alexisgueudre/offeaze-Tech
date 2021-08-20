const express = require('express');
const router = express.Router();

const {CoworkingModel} = require("../models/coworking")
//envoie des données sur la page de l'api
router.get("/",(req,res)=>{
    CoworkingModel.find((err,docs) =>
    {
        if(!err)res.send(docs)
        else console.log("error to get data" + err)
    })
})

module.exports = router;