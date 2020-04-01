
const app = require('express')()
const bodyParser = require('body-parser')
const fs = require('fs');
const qrcode = require('qrcode');
const request = require('request')
require('./src/mongo')
const Geo = require('./controller/GeoController')
app.use(bodyParser.urlencoded({extended: true}))


app.get('/api', (req, res) => {    
    res.sendFile(__dirname + "/index.html")
})

app.post('/res', (req, res) => {
    
// run().catch(error => console.error(error.stack));
// async function run() {
//   const parse = req.body.content  
  
//   const ress = await qrcode.toDataURL(`${parse}`);
//   await fs.writeFileSync('./qr.html', `<img src="${ress}">`);
//   console.log('Wrote to ./qr.html');

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


geocode("Porto velho",(error, { latitude, longitude, location } = {})=>{
    
    if(error){        
        // console.log(error)
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




const validarNome =(nome, callback)=>{
    if(nome !="daniel"){
        callback("Nome invalido",undefined)
    } else {
        callback(undefined,{
            "name": nome,
            "valido": true,
            "cod":154
        })
    }
}
validarNome("daniel",(error,data)=>{
    if(error){
        return console.log(error)
    }
     console.log(data)
})
})

app.get('/locations', (req, res)=>{
    Geo.BuscarGeos(req, res)
})
app.get('/um/:_id', (req, res)=>{
    //console.log(req.params._id)
    Geo.BuscarUm(req, res,(callback2)=>{
        console.log(callback2)
    })
})







 

    






app.listen(3009, function(){
    console.log('app rodando na porta 3000')
})

