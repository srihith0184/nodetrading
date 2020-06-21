var msg = 'Hello World';
console.log("Hi Node");

var express=require("express");
var app=express();
var http=require("http");
var bodyParser=require("body-parser");
var PORT=process.env.PORT || 3000;
var request=require("request");

var niftyUrl="https://partha-trading.herokuapp.com/trading/nifty/options";
var bankNiftyUrl="https://partha-trading.herokuapp.com/trading/banknifty/options";

app.use(function(req,res,next) {

    res.header("Access-Control-Allow-Origin","*");
    next();
});



app.get("/nifty", (error, response, body) => {
    request.get(niftyUrl,(error,res,body) => {
        response.send(body);});
});


app.get("/banknifty", (error, response, body) => {
    request.get(bankNiftyUrl,(error,res,body) => {
        response.send(body);});
});


var httpServer = http.createServer(app);
httpServer.listen(PORT, () => console.log(`API running on localhost:${PORT}` ));