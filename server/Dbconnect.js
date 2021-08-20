const mongoose = require("mongoose");

//connexion a la bdd
mongoose.connect
(
    "mongodb://localhost:27017/offeaze",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err)=>
    {
        if(!err) console.log("mongodb connect");
        else console.log("Connection error:"+ err);
    }
)