const mongoose = require('mongoose')
const mongodb = require('mongodb')
// mongoose.connect("geonosis.mongodb.umbler.com:46115",{ useNewUrlParser: true, useUnifiedTopology: true })
mongodb.connect('mongodb://nothin04:danielk20@mongo_amey:27017/Amey')
var db = mongoose.connection

db.once('connected', ()=>{
    console.log('Conectado')
})
