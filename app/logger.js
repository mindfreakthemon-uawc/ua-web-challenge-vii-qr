var winston = require('winston'),
	util = require('util');

module.exports = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({
			level: 'info',
			timestamp: function () {
				return new Date();
			},
			formatter: function (options) {
				return util.format('[%s] %s: %s \n%j',
					options.timestamp().toISOString(),
					options.level.toUpperCase(),
					options.message,
					options.meta
				);
			}
		})
	]
});