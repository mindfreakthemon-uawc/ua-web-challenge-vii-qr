module.exports = require('nomnom')
	.option('room', {
		abbr: 'r',
		required: true,
		default: 'mindfreakthemon/ua-web-challenge-vii-qr',
		help: 'Room to join'
	})
	.option('token', {
		abbr: 't',
		required: true,
		default: process.env.TOKEN,
		help: 'Token for authorizing in Gitter'
	})
	.parse();