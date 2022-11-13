const exp = require('express');
const bodyparser = require('body-parser');
const app = exp();
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname + '/index.html');
})
app.post("/",function(req,res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1+n2;
    res.send(String(result));
});
app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname + '/bmiCalculator.html');
})
app.post("/bmiCalculator",function(req,res){
    var h1 = req.body.h1;
    var w1 = req.body.w1;
    var result = w1/h1*h1;
    res.send("your bmi is :" + result);
});
app.listen(3000,function(){
    console.log("Listening on port 3000")
});
