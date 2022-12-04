const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.ejs');
var todo_one = [];
var work = [];
var ejs = require('ejs')
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    let dayz = date();
    res.render("list", {KindOfDay : dayz , listTitle : todo_one}); // Where index.ejs is your ejs template
  });
app.post('/',function(req,res){
    todo_one.push(req.body.todo1);
    res.redirect("/");
})
app.get("/work",function(req,res){
    res.render("list", {KindOfDay : "Work" , listTitle : work});
})
app.post("/work",function(req,res){
    todo_one.push(req.body.todo1);
    res.redirect("/");
})
app.get("/about",function(req,res){
    res.render("about")
})
app.listen(3000,function(){
    console.log("server running on localhost:3000")
})