const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }))

var $ = require("jquery");
const jsdom = require('jsdom')
$ = require('jquery')(new jsdom.JSDOM().window);
app.use(express.static('public'));

let quote = require('./public/js/getQuote');
let question = quote.getQuote;

app.set("view engine", "ejs");
app.engine('ejs', require('ejs').__express);


let streak = 0;

async function run(){
    var qns = await question();
    console.log(qns);
    return qns;
    //change html 
}



app.get("/", function(req, res){
    streak = 0;
    res.render("index");
})


app.post("/start", function(req, res){
    run().then((response) => {
        console.log("current score is " + req.body.s);
        res.render("qns", {data: response, streak: req.body.s});
        })
})

app.get("/About", function(req, res){
    res.render("about");
})



app.listen(process.env.PORT || 3000, function(){
    console.log("Server started on port 3000")
})

