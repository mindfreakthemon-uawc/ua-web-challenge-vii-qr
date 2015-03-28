var math = require('mathjs'),
	regExp = new RegExp('^`?calc\\s+([^`]+)`?$', 'i');

function isParsable(message) {
	return regExp.test(message.text);
}

function parse(message) {
	var matches = message.text.match(regExp),
		expression = matches[1];

	return '`' + expression + ' = ' + math.eval(expression) + '`';
}

exports.parse = parse;
exports.isParsable = isParsable;