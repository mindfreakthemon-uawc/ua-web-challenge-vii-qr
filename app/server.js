var options = require('./options'),
	logger = require('./logger'),
	parser = require('./parser'),
	Gitter = require('node-gitter'),
	gitter = new Gitter(options.token);

gitter.currentUser()
	.then(function (user) {
		logger.info('Logged in as:', user.username);

		gitter.rooms.join(options.room)
			.then(function (room) {
				logger.info('Joined room:', room.name);

				var events = room.listen();

				events.on('message', function (message) {
					logger.info('New message from ', message.fromUser.username);

					if (parser.isParsable(message)) {
						logger.info('Message is parsable. Sending answer..');

						room.send(parser.parse(message));
					} else {
						logger.info('Message is not parsable.');
					}
				});
			});
	})
	.fail(function (e) {
		logger.error('Failed to join the room: ', e);
	});