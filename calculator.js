const express = require("express");
const bodyparser = require("body-parser");
const app = express();
 // using body-parser tp parse the form data into relevant values which we can use to perform any manipulation on it
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req, res){
 // res.send("Hello World!");
 res.sendFile(__dirname + "/index.html");
});

// to let our server also handle post request 
app.post("/", function(req, res){
    // res.send("Thanks for posting that!")
    // console.log(req.body); this logs the form data entred by user
    var num1 = Number(req.body.num1); // to capture the value of first field named as num1 inside index.html from the form (data entered by user) and typecasting into int as body-parser returns everything as a text
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result of the calculation is "+ result);
    });

// BMI Calculator code

app.get("/bmicalculator", function(req, res){
   res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var BMI = weight/(height*height);
  res.send("Your BMI is "+ BMI);
});

app.listen(3000, function(){
 console.log("Started server at 3000 port");
});
