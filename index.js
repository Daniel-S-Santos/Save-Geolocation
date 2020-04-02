
const app = require('express')()
const bodyParser = require('body-parser')
const fs = require('fs');
const qrcode = require('qrcode');
const request = require('request')
require('./src/mongo')
const Geo = require('./controller/GeoController')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
const port = process.env.PORT || 3009
app.get('/api', (req, res) => {    
    res.sendFile(__dirname + "/index.html")
})

app.post('/res', (req, res) => {
    if(!req.body.content){
        return res.send('Por favor digite uma localização.')
    }



const geocode = (address, callback) => {    
const encoded = address
    
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encoded}.json?access_token=pk.eyJ1Ijoibm90aGluNCIsImEiOiJjazhiMDFocmUwM20zM2Vuc2Y0Zmt6aml6In0.jtCFcTt7ZQ0f_ho8zIQpTg`

    request({url, json:true},(error, {body}={}) => {
        
        if(error){            
            callback("falha ao se comunicar com o servidor", undefined)
        }else {            
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

// const address = req.body.content
geocode(req.body.content,(error, { latitude, longitude, location } = {})=>{
    
    if(error){        
         console.log("entrou error")
        return console.log(error)
    }
    const data = {latitude:latitude,
    longitude:longitude,
    location:location
    }
    //console.log(data)
    Geo.InserirGeo(req,res,data)
    //console.log(' '+location)
})
})

app.get('/locations', (req, res)=>{
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

app.post('/api/inserir/', (req, res)=>{
     
    if(!req.body.content){
        return res.send('Por favor digite uma localização.')
    }



  
const geocode = (address, callback) => {    
const encoded = address
   
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encoded}.json?access_token=pk.eyJ1Ijoibm90aGluNCIsImEiOiJjazhiMDFocmUwM20zM2Vuc2Y0Zmt6aml6In0.jtCFcTt7ZQ0f_ho8zIQpTg`

    request({url, json:true},(error, {body}={}) => {
        
        if(error){            
            callback("falha ao se comunicar com o servidor", undefined)
        }else {            
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

 

for(let i = 0; i <= 10000; i++){
geocode(req.body.content,(error, { latitude, longitude, location } = {})=>{
    
    if(error){        
         console.log("entrou error")
        return console.log(error)
    }
    const data = {latitude:latitude,
    longitude:longitude,
    location:location
    }
    //console.log(data)
    Geo.InserirGeo(req,res,data)
    //console.log(' '+location)
})
} 

})


app.listen(port, function(){
    console.log('app rodando na porta '+port)
})

