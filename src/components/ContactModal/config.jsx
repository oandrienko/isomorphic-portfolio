import { createStore } from 'redux';
import contactModal from './reducers/contactModal'
import { loadStoredState, setStoredState } from './utils/storage';

const configureStore = () => {

	//get localhost state
	//const persistedState = loadStoredState();
	const persistedState = {
		messages: [
			{
				user: 1,
				message: 'Hello',
				timestamp: '9/13/2016 11:53:58 PM'
			},
			{
				user: 0,
				message: 'Hey! Thanks for stopping by.',
				timestamp: '9/13/2016 11:53:59 PM'
			},
			{
				user: 0,
				message: 'Would you like to leave a message for Oles? I\'d be happy to forward it to him.',
				timestamp: '9/13/2016 11:54:00 PM'
			},
		],
	};

	const store = createStore(contactModal, persistedState);

	store.subscribe(() => {
		saveStoredState(store.getState());
	});

	return store;
}

export default configureStore;