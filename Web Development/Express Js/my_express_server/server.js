const express = require("express");

const app = express();

app.get("/",function(req,res){
    //console.log(request);
    res.send("<h1>Hello,World!</h1>");
})
app.get("/contact",function(req,res){
    //console.log(request);
    res.send("<h2>Hello , Khushi this side !</h2>");
})
app.get("/about",function(req,res){
    //console.log(request);
    res.send("<h2>this is the about page</h2>");
})
app.get("/hobbies",function(req,res){
    //console.log(request);
    res.send("<ul><li>Badminton</li><li>Hockey</li><li>Baseball</li></ul>");
})
app.listen(3000 , function(){ 
    // callback function
    console.log("Server started at port 3000");
});