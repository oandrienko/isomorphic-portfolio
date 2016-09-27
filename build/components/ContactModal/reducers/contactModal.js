'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var messages = function messages() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	var action = arguments[1];


	switch (action.type) {
		default:
			return state;
	}
};

var modal = function modal() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	var action = arguments[1];


	switch (action.type) {
		default:
			return state;
	}
};

var contactModal = (0, _redux.combineReducers)({
	messages: messages,
	modal: modal
});

exports.default = contactModal;