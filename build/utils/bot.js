'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var base = 'http://the-contact-bot.herokuapp.com/api/v1/';

exports.default = {
	sendMessage: function sendMessage(user, message, context) {
		var endpoint = base + 'message/converse';
		console.log('AJAX: Sending Message to server [/converse]....');
		return new Promise(function (resolve) {
			$.ajax({
				method: "POST",
				url: endpoint,
				data: {
					user: user,
					message: message,
					context: context
				}
			}).done(function (results) {
				console.log('AJAX: Response from AJAX call [/converse]=> ', results);
				resolve(results);
			});
		}).then(function (resolve) {
			return resolve;
		});
	},
	pullMessage: function pullMessage(user) {
		var endpoint = base + 'message/pull';
		console.log('AJAX: Sending Message to server [/pull]....');
		return new Promise(function (resolve) {
			$.ajax({
				method: "POST",
				url: endpoint,
				data: {
					user: user
				}
			}).done(function (results) {
				console.log('AJAX: Response from AJAX call [/pull]=> ', results);
				resolve(results);
			});
		}).then(function (resolve) {
			return resolve;
		});
	}
};