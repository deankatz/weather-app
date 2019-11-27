const express = require('express')
const router = express.Router()
const City = require('../model/City')
const request = require('request')

let key = "1a1deeb8252a9b875c4796d88e2b9bf2"




router.get('/city/:cityName', function (req, res) {
    let city = req.params.cityName
    request(`http://api.weatherstack.com/v1/current.json?key=1a1deeb8252a9b875c4796d88e2b9bf2&q=${city}`, function (err, responde) {
        let data = JSON.parse(responde.body)
        
        res.send(data)
    })
})

router.get('/cities', function (req, res) {
    City.find({}, function (err, cities) {
        res.send(cities)
    })
})
router.post('/city', function (req, res) {
    let data = req.body
    let c2 = new City(data)
    console.log(c2)
    c2.save()
    res.end()
})

router.put('/city/:cityName', function(req,res){
    let city = req.params.cityName
    request(`http://api.weatherstack.com/v1/current.json?key=1a1deeb8252a9b875c4796d88e2b9bf2&q=${city}`, function (err, responde) {
        let data = JSON.parse(responde.body)
        let info = ({
            name: data.location.name,
            temperature: data.current.temp_c,
            condition: data.current.condition.text,
            icon: data.current.condition.icon,
            timeLastUpdated: data.current.last_updated
        })
        City.findOneAndUpdate({name: city}, info,(err, result)=>  {} )
        
        res.send(info)
    })
    })

   
    
    


router.delete("/city/:cityName", function (req, res) {
    let city = (req.params.cityName)
    const cityCapital = city.charAt(0).toUpperCase() + city.slice(1)

    console.log(cityCapital)
    City.findOne({ name: `${cityCapital}` }, function (err, cityName) {
        console.log(cityName)
        cityName.remove(function (erroorr) {
            console.log(erroorr)
        })
    })
    res.end()
})



module.exports = router