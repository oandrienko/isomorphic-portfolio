
export const loadStoredState= () => {
	//wrap in try catch as localStorage can be disabled.
	try {
		const serializedState = localStorage.getItem('contactmodal_state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch(error) {
		return undefined;
	}
};

export const saveStoredState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('contactmodal_state', serializedState);
	} catch (error) {
		//Ignore for now. But we should probably log this.
	}
}