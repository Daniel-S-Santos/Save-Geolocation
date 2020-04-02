const mongoose = require('mongoose')




uri = "mongodb://nothin04:danielk20@mongo_amey:27017/amey?retryWrites=true&w=majority";
//uri = "mongodb://localhost:27017/Amey"
// mongoDB.connect(uri,{ useUnifiedTopology: true }).then(()=>{
//     console.log('deu bom')
// }) 
mongoose.connect(uri,{ useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.once('connected',()=>{
    console.log('Connectado')
})
//mongodb.connect('mongodb://nothin04:danielk20@mongo_amey:27017/amey',{ useUnifiedTopology: true})
    