const express = require('express');
const app = express();
var cors = require('cors')

require("./Dbconnect")
const port = process.env.PORT || 5500;
const coworkingRoutes = require("./Routes/coworkingController");
//usage pour cors
app.use(cors())
//route pour les données de l'api
app.use("/coworking",coworkingRoutes);
//ecoute du srveur pour vérifier le bon fonctionement
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});