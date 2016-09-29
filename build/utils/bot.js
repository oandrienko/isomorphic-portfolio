'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var base = 'https://the-contact-bot.herokuapp.com/api/v1/';
// const base = 'http://localhost:8000/api/v1/';

exports.default = {
	sendMessage: function sendMessage(user, message) {
		var endpoint = base + 'message/converse';
		console.log('AJAX: Sending Message to server [/converse]....');
		return new Promise(function (resolve) {
			$.ajax({
				method: "POST",
				url: endpoint,
				data: {
					user: user,
					message: message
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
		var endpoint = base + 'message/converse';
		console.log('AJAX: Sending Message to server [/pull]....');
		return new Promise(function (resolve) {
			$.ajax({
				method: "POST",
				url: endpoint,
				data: {
					user: user,
					message: null
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