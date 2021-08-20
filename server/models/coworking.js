const mongoose = require("mongoose");

const CoworkingModel = mongoose.model(
    "offeaze",
    {
        NameCoworking:
        {
            type:String,
        },
        Photo:
        {
            type:String,
        },
        Description:
        {
            type:String,
        },
        Localisation:
        {
            type:String,
        },
        Prix_Heure_HT:
        {
            type:String,
        },
        Prix_Demi_Journer_HT:
        {
            type:String,
        },
        Prix_Journer_HT:
        {
            type:String,
        },
    },
    "coworking"
)

module.exports = { CoworkingModel };