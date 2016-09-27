import API from './../utils/bot';

export const sendMessage = (message) => (dispatch) => {
	dispatch(requestMessage());
	return API.sendMessage(message).then( resolve => {
		dispatch(receiveCard(resolve, listId));
	});
};

const requestMessage = () => {
	console.log('Requesting message....');
	return { 
		type: 'REQUEST_DATA'
	};
};

const receiveMessage = (response) => {
	console.log('Received message!');
	return {
		type: 'RECEIVE_CARD',
		response
	};
};