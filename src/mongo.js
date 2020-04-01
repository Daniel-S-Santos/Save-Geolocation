const mongoose = require('mongoose')

// mongoose.connect("geonosis.mongodb.umbler.com:46115",{ useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect('mongodb://nothin04:danielk20@mongo_amey:27017/Amey')
var db = mongoose.connection

db.once('connected', ()=>{
    console.log('Conectado')
})
