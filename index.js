const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

if (process.env.NODE_ENV != 'production') {
  app.use(require('./build'));
}
// <=== Middleware ===>
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//<=== engine setup ===>
app.use("/static", express.static(__dirname+"/Public"));

// <=== routes ===>
app.use('/', require('./Routes/RegisterFreelancer.js'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function () {
  console.log("hi there", port);
});
