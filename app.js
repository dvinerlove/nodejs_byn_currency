var express = require('express');
const fetch = require('node-fetch');
var app = express();
const path = require('path');
let ejs = require('ejs');
let page = path.join(__dirname, '/public/index');



let url = "https://www.nbrb.by/api/exrates/rates?periodicity=0";
let settings = { method: "Get" };
var jsonArray ;
let html ;

app.set('view engine', 'ejs');
app.get('/', function (req, res) {
  fetch(url, settings)
      .then(res => res.json())
      .then((json) => {
        jsonArray = json;
        res.render(page, {
            json: json
        });
      });



})


app.listen(8080);
