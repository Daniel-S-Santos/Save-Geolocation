const mongoose = require('mongoose')
const mongoDB = require('mongodb')



uri = "mongodb://nothin04:danielk20@mongo_amey:27017/amey?retryWrites=true&w=majority";
//uri = "mongodb://localhost:27017/Amey"
// mongoDB.connect(uri,{ useUnifiedTopology: true }).then(()=>{
//     console.log('deu bom')
// }) 
mongoose.connect(uri,{ useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{
    console.log('deu bom')
})
//mongodb.connect('mongodb://nothin04:danielk20@mongo_amey:27017/amey',{ useUnifiedTopology: true})
    