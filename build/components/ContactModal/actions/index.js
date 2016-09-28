'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setUserId = exports.sendMessage = undefined;

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _bot = require('./../utils/bot');

var _bot2 = _interopRequireDefault(_bot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestMessage = function requestMessage(user, message) {
	console.log('requestMessage dispatched');
	return {
		type: 'REQUEST_REPONSE',
		user: user,
		message: message
	};
};

var receiveMessage = function receiveMessage(response) {
	console.log('receiveMessage dispatched');
	return {
		type: 'RECEIVE_RESPONSE',
		response: response
	};
};

var sendMessage = exports.sendMessage = function sendMessage(user, message, context) {
	return function (dispatch) {
		dispatch(requestMessage(user, message));

		return _bot2.default.sendMessage(user, message, context).then(function (resolve) {
			dispatch(receiveMessage(resolve));

			//Keep sending requests until wit response type is 'stop';
			var res_type = null;
			_async2.default.whilst(function () {
				return res_type !== 'stop';
			}, function (next) {
				console.log('Calling Bot.pullMessage from async.whilst...');
				_bot2.default.pullMessage(user).then(function (resolve) {
					if (resolve.type !== 'stop' || resolve.type !== 'action') {
						if (resolve.confidence < 0.2) resolve.msg = "My sole purpose is to forward Oles inquiries. " + "Would you like me to him send something?";
						dispatch(receiveMessage(resolve));
					}
					res_type = resolve.type;
					next();
				});
			}, function (error, n) {
				console.log('Done from async.whilst, with errors => ', error);
			});
		});
	};
};

var setUserId = exports.setUserId = function setUserId(id) {
	console.log('Setting User Id...');
	return {
		type: 'SET_USER',
		id: id
	};
};