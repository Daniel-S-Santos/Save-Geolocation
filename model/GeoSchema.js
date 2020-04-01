const mongoose = require('mongoose')
const mongodb = require('mongodb')
const GeoSchema = mongodb.Schema({
    latitude: {type: String},
    longitude: {type: String},
    location: {type: String},
    createdAt: {type: Date, default:Date.now }
})
// const GeoSchema = mongoose.Schema({
//     latitude: {type: String},
//     longitude: {type: String},
//     location: {type: String},
//     createdAt: {type: Date, default:Date.now }
// })

var Geo = mongodb.model("Geo",GeoSchema)

module.exports = Geo


