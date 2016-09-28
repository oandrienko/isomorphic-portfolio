'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _contactModal = require('./reducers/contactModal');

var _contactModal2 = _interopRequireDefault(_contactModal);

var _storage = require('./utils/storage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureStore = function configureStore() {

	//Get state from localStorage
	//const persistedState = loadStoredState();
	var persistedState = {
		messages: [
			// {
			// 	user: 1,
			// 	message: 'Hello',
			// 	timestamp: 'Wed Sep 28 2016 12:20:58 AM'
			// },
			// {
			// 	user: null,
			// 	message: 'Hey! Thanks for stopping by.',
			// 	timestamp: 'Wed Sep 28 2016 12:20:58 AM'
			// },
			// {
			// 	user: null,
			// 	message: 'Would you like to leave a message for Oles? I\'d be happy to forward it to him.',
			// 	timestamp: 'Wed Sep 28 2016 12:20:58 AM'
			// },
		]
	};

	var store = (0, _redux.createStore)(_contactModal2.default, persistedState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

	// store.subscribe(() => {
	// 	setStoredState(store.getState());
	// });

	return store;
};

exports.default = configureStore;