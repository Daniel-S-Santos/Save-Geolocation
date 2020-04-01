const mongoose = require('mongoose')
const mongodb = require('mongodb')

const GeoSchema = mongoose.Schema({
    latitude: {type: String},
    longitude: {type: String},
    location: {type: String},
    createdAt: {type: Date, default:Date.now }
})

var Geo = mongoose.model("Geo",GeoSchema)

module.exports = Geo


