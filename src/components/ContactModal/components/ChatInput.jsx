import React from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions';

let ChatInput = ({dispatch}) => {

	return (
	    <form id="chat-form"
	    	className="chat-input" 
	    	onSubmit={() => {
	    		dispatch(actions.sendMessage);
	    	}}>
	        <input type="text" className="chat-input--fill" name="message" placeholder="Your message..." maxLength="40"/>
	        <input type="submit" className="chat-input--bg" id="chat-submit" />
	    </form>
    );
};

ChatInput = connect()(ChatInput);

export default ChatInput;