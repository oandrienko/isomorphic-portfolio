'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _reduxForm = require('redux-form');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var messages = function messages() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	var action = arguments[1];

	var d = new Date();

	switch (action.type) {
		case 'REQUEST_REPONSE':
			console.log('-> creating bubble from messages reducer ...');
			return [].concat(_toConsumableArray(state), [{
				user: action.user,
				message: action.message,
				timestamp: d.toDateString() + ' ' + d.toLocaleTimeString()
			}]);
			break;
		case 'RECEIVE_RESPONSE':
			return [].concat(_toConsumableArray(state), [{
				user: null,
				message: action.response.msg,
				timestamp: d.toDateString() + ' ' + d.toLocaleTimeString()
			}]);
			break;
		default:
			return state;
	}
};

var isFetching = function isFetching() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case 'REQUEST_REPONSE':
			console.log('Sending request..');
			return true;
			break;
		case 'RECEIVE_RESPONSE':
			return false;
			break;
		default:
			return state;
	}
};

var user = function user() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case 'SET_USER':
			console.log('user reducer called..');
			return Object.assign({}, state, {
				id: action.id
			});
			break;
		default:
			return state;
	}
};

var contactModal = (0, _redux.combineReducers)({
	user: user,
	messages: messages,
	isFetching: isFetching,
	form: _reduxForm.reducer
});

exports.default = contactModal;