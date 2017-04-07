let messages = [];

const Chat = {
	create: function(to, from, content) {
		const message = {
			to: to,
			from: from, 
			content: content
		}
		messages.push(message);
	},

	render: function() {
		return messages
	},

} 

module.exports = Chat;