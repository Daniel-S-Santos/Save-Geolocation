const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/Amey",{ useNewUrlParser: true, useUnifiedTopology: true })

var db = mongoose.connection

db.once('connected', ()=>{
    console.log('Conectado')
})