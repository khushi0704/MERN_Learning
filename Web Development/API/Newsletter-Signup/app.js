const bodyParser = require('body-parser');
const request = require('request');
const express = require('express');
const { response } = require('express');
const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signup.html")
  })
app.post("/",(req,res)=>{
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email_add = req.body.email;
  const data = { // store credentials of a user at a time
    members: [
      {
        email_address:email,
        status:"subscribed",
        merge_fields:{
          FNAME : firstName,
          LNAME: lastName
        }
      }
    ]
  }
  const url = 'https://us13.api.mailchimp.com/3.0/lists';
  const options ={
    method : "POST",
    auth : "khush:54a415a130c9810e3b207503793caa0b-us13"
  }
  // '54a415a130c9810e3b207503793caa0b-us13';
  var jsonData = JSON.stringify(data); // change our data into json format
 const request =  https.request(url,options,function(response){
    if(response.statusCode === 200){
      res.send("Successfully subscribed !");
    }
    else{
      res.send("There was an error with signing up , please try again !");
    }
  
  
  response.on("data",function(data){
      console.log(JSON.parse(data));
    })
  })
  request.write(jsonData);
  request.end();
});

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
  })