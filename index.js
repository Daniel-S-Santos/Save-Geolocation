
const app = require('express')()
const bodyParser = require('body-parser')
const request = require('request')
require('./src/mongo')
const Geo = require('./controller/GeoController')
const geocode = require('./src/geocode')
const previsao = require('./src/previsao')
const cors = require("cors")
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.options('10.1.2.77', cors())
const port = process.env.PORT || 3009
const corsOptions = {
    origin: "10.1.2.77",
    optionsSuccessStatus: 200
}
app.get('/api',cors(), (req, res) => {    
    res.sendFile(__dirname + "/index.html")
})

app.post('/previsao',cors(), (req, res)=>{
    
    geocode(req.body.local,(error,{ latitude, longitude, location}={})=>{
        
        if (error){
            return console.log(error)
        }
        
        previsao(latitude,longitude,location,(error,data)=>{
            if(error){
                return console.log(eror)
            }
            res.send(data)            
        })    
    })
})


app.get('/locations',cors(), (req, res)=>{
    Geo.BuscarGeos(req, res)
})

app.get('/um/:_id', (req, res)=>{    
    Geo.BuscarUm(req, res,(callback2)=>{
        console.log(callback2)
    })
})

app.get('/deletall', (req, res)=>{
    Geo.DeletarTudo(req, res)
})

app.get('/deletarum/:_id', (req, res)=>{
    Geo.DeletarUm(req, res)
})

app.listen(port, function(){
    console.log('app rodando na porta '+port)
})

app.post('/res', (req, res) => {
    if(!req.body.content){
        return res.send('Por favor digite uma localização.')
    }

    geocode(req.body.content,(error, { latitude, longitude, location, resumo } = {})=>{
        if(error){        
            console.log("error geocode")
            return console.log(error)
        }
        const data = {latitude:latitude,
        longitude:longitude,
        location:location,
        resumo:resumo
        }    
        Geo.InserirGeo(req,res,data)
        
    })
})