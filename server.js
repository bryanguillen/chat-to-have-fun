// I require express as a dependency, express allows me to handle requests and responses
var express = require('express');
//other dependencies
var morgan = require('morgan');
var bodyParser = require('body-parser');

// I create an express application
var app = express();
//HTTP log layer
app.use(morgan('common'));

// I say to my express application that I want my static content to be in the folder pages
app.use(express.static('pages'));

// Start to listen the port 3000 of localhost of my express application
app.listen(3000, function () {
  console.log('i am in localhost:3000');
});
