'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
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