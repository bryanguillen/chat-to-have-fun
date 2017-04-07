// I require express as a dependency, express allows me to handle requests and responses
const express = require('express');
//other dependencies
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Chat = require('./model');
const Router = require('./chatRouter')

// I create an express application
const app = express();
//HTTP log layer
app.use(morgan('common'));

Chat.create('Juan', 'Bryan', 'Hello');
Chat.create('Juan', 'Bryan', 'Hello again');
Chat.create('Juan', 'Bryan', 'Hello there');

app.use('/messages', Router);

// I say to my express application that I want my static content to be in the folder pages
app.use(express.static('pages'));

// Start to listen the port 3000 of localhost of my express application
app.listen(3000, function () {
  console.log('i am in localhost:3000');
});
