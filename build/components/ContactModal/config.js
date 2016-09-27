'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _contactModal = require('./reducers/contactModal');

var _contactModal2 = _interopRequireDefault(_contactModal);

var _storage = require('./utils/storage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureStore = function configureStore() {

	//get localhost state
	//const persistedState = loadStoredState();
	var persistedState = {
		messages: [{
			user: 1,
			message: 'Hello',
			timestamp: '9/13/2016 11:53:58 PM'
		}, {
			user: 0,
			message: 'Hey! Thanks for stopping by.',
			timestamp: '9/13/2016 11:53:59 PM'
		}, {
			user: 0,
			message: 'Would you like to leave a message for Oles? I\'d be happy to forward it to him.',
			timestamp: '9/13/2016 11:54:00 PM'
		}]
	};

	var store = (0, _redux.createStore)(_contactModal2.default, persistedState);

	store.subscribe(function () {
		saveStoredState(store.getState());
	});

	return store;
};

exports.default = configureStore;