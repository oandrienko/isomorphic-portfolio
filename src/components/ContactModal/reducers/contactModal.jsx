import { combineReducers } from 'redux';

const messages = (state = [], action) => {

	switch(action.type) {
		default:
			return state;
	}

};

const modal = (state = [], action) => {

	switch(action.type) {
		default:
			return state;
	}

};

const contactModal = combineReducers({
	messages,
	modal
});

export default contactModal;