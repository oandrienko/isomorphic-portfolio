import React from 'react';

const ChatWindow = () => (
        <div id="chat-window" className="chat-box">

		<div className="chat-message">
			<div className="message-left">
				<div className="message-bubble grey-bubble">
					Hello
				</div>
				<span className="message-timestamp">
					9/13/2016 11:53:58 PM
				</span>
			</div>
		</div>

		<div className="chat-message">
			<div className="message-right">
				<div className="message-bubble blue-bubble">
					Hey! Thanks for stopping by.
				</div>
				<span className="message-timestamp">
					9/13/2016 11:53:59 PM
				</span>
			</div>
		</div>

		<div className="chat-message">
			<div className="message-right">
				<div className="message-bubble blue-bubble">
					Would you like to leave a message for Oles? I'd be happy to forward it to him.
				</div>
				<span className="message-timestamp">
					9/13/2016 11:54:00 PM
				</span>
			</div>
		</div>

	</div>
);

export default ChatWindow;