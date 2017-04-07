const express = require('express');
const router = express.Router();

//more dependencies
const bodyParser = require('body-parser');
const Chat = require('./model');

router.get('/', (req, res) => {
	let messages = Chat.render();
	res.status(200).send(messages);
});



module.exports = router