const Geo = require('../model/GeoSchema')
const previsao = require('../src/previsao')
var erros = []
 exports.InserirGeo = async function(req, res,geolocation) {
//console.log('entrou Inserir', geolocation)
    Geo.create(geolocation).then(r=>{
        if(r){
            previsao(geolocation.latitude,geolocation.longitude,geolocation.location,(error,data)=>{
                if(error){
                    res.send("error")
                }else{                    
                    res.send(data)
                }
            })
        }        
    }).catch(error=>{
        erros.push(error)
    })
}

exports.BuscarGeos = function(req, res){    
        Geo.find().then(r =>{
            
            if(r){
                res.send(r)
            }
        }).catch(error => {res.send(error)})    
}

exports.BuscarUm = function(req, res){
    
    let objeto = req.params._id
    
    Geo.findById({"_id" : objeto}).then(r =>{        
        if(!r){           
            res.send({"404":'Não encontrado'})
        }else {
            const lol = JSON.stringify(r)
            res.send(lol)
        }
    }).catch(error =>{res.send(error)})
}

exports.DeletarTudo = function(req, res){
    Geo.deleteMany().then((r)=>{
        console.log('deletados')
        res.send('Todas as locations foram deletadas')
    }).catch(error => {
        console.log(error)
    })
}
exports.DeletarUm = function(req, res){
    let objeto = req.params._id
    Geo.findOneAndDelete({"_id":objeto}).then(r =>{
        if(!r){
            res.send('Localização nao encontrada')
        }else{
        console.log("Deletado com sucesso")
        const lol = JSON.stringify(r)
        res.send(lol)     
        }
    }).catch(error => { res.send(error)})
}




