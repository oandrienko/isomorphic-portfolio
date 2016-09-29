'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getUserContext = exports.getUserContext = function getUserContext() {
	try {
		var user_context = localStorage.getItem('contactmodal_user_context');
		if (user_uuid === null) {
			return undefined;
		}
		return user_context;
	} catch (error) {
		return undefined;
	}
};

var getUserId = exports.getUserId = function getUserId() {
	try {
		var _user_uuid = localStorage.getItem('contactmodal_user_uuid');
		if (_user_uuid === null) {
			return undefined;
		}
		return _user_uuid;
	} catch (error) {
		return undefined;
	}
};

var loadStoredState = exports.loadStoredState = function loadStoredState() {
	//wrap in try catch as localStorage can be disabled.
	try {
		var serializedState = localStorage.getItem('contactmodal_state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (error) {
		return undefined;
	}
};

var saveStoredState = exports.saveStoredState = function saveStoredState(state) {
	try {
		var serializedState = JSON.stringify(state);
		localStorage.setItem('contactmodal_state', serializedState);
	} catch (error) {
		//Ignore for now. But we should probably log this.
	}
};