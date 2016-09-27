'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.sendMessage = undefined;

var _bot = require('./../utils/bot');

var _bot2 = _interopRequireDefault(_bot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendMessage = exports.sendMessage = function sendMessage(message) {
	return function (dispatch) {
		dispatch(requestMessage());
		return _bot2.default.sendMessage(message).then(function (resolve) {
			dispatch(receiveCard(resolve, listId));
		});
	};
};

var requestMessage = function requestMessage() {
	console.log('Requesting message....');
	return {
		type: 'REQUEST_DATA'
	};
};

var receiveMessage = function receiveMessage(response) {
	console.log('Received message!');
	return {
		type: 'RECEIVE_CARD',
		response: response
	};
};