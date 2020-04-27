// creation d'un application sous node express avec mot
// de passe et login 

let data = require('./data');


var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    //res.json(data)
   res.redirect('/back')
});


// POST method route
app.post('/post', function (req, res) {
    var name = req.body.name


    console.log(name);
    res.end("yes")
  });

// res.status(404).send('Sorry, we cannot find that!')
// res.status(500).send({ error: 'something blew up' })


app.listen(3002, function () {
  console.log('Example app listening on port 3000!')
})