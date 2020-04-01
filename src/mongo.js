const mongoose = require('mongoose')

mongoose.connect("geonosis.mongodb.umbler.com:46115",{ useNewUrlParser: true, useUnifiedTopology: true })

var db = mongoose.connection

db.once('connected', ()=>{
    console.log('Conectado')
})