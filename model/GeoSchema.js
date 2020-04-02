const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const GeoSchema = new Schema({
    id : {type: ObjectId},
    latitude: {type: String},
    longitude: {type: String},
    location: {type: String},
    createdAt: {type: Date, default:Date.now }
})

var Geo = mongoose.model("Geo",GeoSchema)

module.exports = Geo


