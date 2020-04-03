const request = require('request')

const previsao = (latitude,longitude,location,callback)=>{
    const url = `https://api.darksky.net/forecast/72027af95938c7fb799d09c966ffd3ba/${latitude},${longitude}?units=si&lang=pt`
    request({url, json:true},(error,{body}={})=>{
        if(error){
            callback("Deu ruim", undefined)
        }else {
            const prob = body.currently.precipProbability
            callback(undefined,{
                "Temperatura": body.currently.temperature,
                "precipitacao": prob,
                "local":location,
                "resumo": body.daily.summary
            })
        }
    })
}

module.exports = previsao

