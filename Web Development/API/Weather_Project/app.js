const express = require('express');
const app = express();
const https = require('https');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    }) 
app.post("/",function(req,res){
    const query = req.body.cityName;
    const apiKey = "4c30b1f5613314e674abdc5cefec3081";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const Weatherdata = JSON.parse(data);
            const temp = Weatherdata.main.temp;
            const icon = Weatherdata.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
            const desc = Weatherdata.weather[0].description;
            res.write("<h1>the temperature in "+ query+" is : " + temp + "degree celsius</h1>");
            res.write("<img src='" + imageURL+ "'/>")
            res.send();
        })
        })
})
    
app.listen(3000,function(){
    console.log("the server is running on port 3000");
})