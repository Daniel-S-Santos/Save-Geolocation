const Geo = require('../model/GeoSchema')


exports.InserirGeo = function(req, res,geolocation) {
//console.log('entrou Inserir', geolocation)
    Geo.create(geolocation).then(r =>{        
        if(r){
            res.send('Inserted')
            console.log('Inseriu')            
        }else {
            throw new Error('Deu ruim')
        }
    }).catch(error =>{console.log(error)})
}

exports.BuscarGeos = function(req, res){    
        Geo.find().then(r =>{
            //console.log(r)
            if(r){
                res.send(r)
            }
        }).catch(error => {res.send(error)})    
}

exports.BuscarUm = function(req, res){
    
    let objeto = req.params._id
    
    Geo.findById({"_id" : objeto}).then(r =>{        
        if(r){            
            res.send(r)
        }else {
            res.send({"404":'Não encontrado'})
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
        console.log("Deletado com sucesso")

        res.send("Deletado com sucesso"+r)     
    }).catch(error => { res.send(error)})
}




