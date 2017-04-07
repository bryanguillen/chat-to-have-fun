const Chat = {
	create: function(to, from, content) {
		const message = {
			to: to,
			from: from, 
			content: content
		}
		return message;
	}
}
