import React from 'react';
import Modal from 'react-modal';

if (process.env.BROWSER) {
	require('stylesRoot/components/modal.scss');
	// require('stylesRoot/components/chat_modal.scss');
}

//TODO: finish this... Add frontend validation
// Also need to make form a seperate controlled component

export default class ContactModal extends React.Component {
	constructor(props) {
		super();
		this.state = { message: ''};
	}

	onSubmit(e) {
		e.preventDefault();

		let self = this, message,
		data = $( "#send-form" ).serialize();
		$.post( '/mail/send', data).done(function(res) {
			console.log( "Data Sent: " + res );
			res = JSON.parse(res);
			if (res.success !== true) {
				message = 'Please fill in all fields properly and try again.';
			} else  {
				message = 'Thank you! Your message was sent.';
				$('#send-form').trigger('reset');
			}
			self.setState({ message: message });
		});
	}

	render() {
		return (
			<Modal
				className="mainContact__modal"
				isOpen={this.props.modalIsOpen}
				onRequestClose={this.props.closeModal}
				shouldCloseOnOverlayClick={true} >

				<span onClick={this.props.closeModal} className="close_button">x</span>

				<h2>Shoot me a message</h2>

                <div>
                    <form id="send-form" onSubmit={(e)=>this.onSubmit(e)}>
                        <input type="text" name="name" placeholder="Full Name" maxLength="40"/>
                        <input type="text" name="email" placeholder="Your Email" maxLength="40"/>
                        <input className="hidden" type="text" name="honey-email" value=""/>
                        <textarea name="message" placeholder="What you'd like to send yo me." rows="5"></textarea>
                        <div id="under-text">{ this.state.message }</div>
                        <input type="submit" value="Send Away" id="submit-button" />
                    </form>
                </div>

			</Modal>
		);
	}
}


// class ContactModal extends React.Component {
// 	constructor(props) {
// 		super();
// 		this.state = { message: ''};
// 	}

// 	onSubmit(e) {
// 		e.preventDefault();

// 		let self = this, message,
// 		data = $( "#send-form" ).serialize();
// 		$.post( '/mail/send', data).done(function(res) {
// 			console.log( "Data Sent: " + res );
// 			res = JSON.parse(res);
// 			if (res.success !== true) {
// 				message = 'Please fill in all fields properly and try again.';
// 			} else  {
// 				message = 'Thank you! Your message was sent.';
// 				$('#send-form').trigger('reset');
// 			}
// 			self.setState({ message: message });
// 		});
// 	}

// 	render() {
// 		return (
// 			<Modal
// 				className="mainContact__modal"
// 				isOpen={this.props.modalIsOpen}
// 				onRequestClose={this.props.closeModal}
// 				shouldCloseOnOverlayClick={true} >

// 				<div className="modal-header">
// 					<button onClick={this.props.closeModal} className="close-button">
// 						<span className="close-button--label">x</span>
// 					</button>
// 					<h2 className="modal-title">Chat with a Bot</h2>
// 				</div>

//                 <div>

//                 	<div id="chat-window" className="chat-box">

//                 		<div className="chat-message">
//                 			<div className="message-left">
//                 				<div className="message-bubble grey-bubble">
//                 					Hello
//                 				</div>
//                 				<span className="message-timestamp">
//                 					9/13/2016 11:53:58 PM
//                 				</span>
//                 			</div>
//                 		</div>

//                 		<div className="chat-message">
//                 			<div className="message-right">
//                 				<div className="message-bubble blue-bubble">
//                 					Hey! Thanks for stopping by.
//                 				</div>
//                 				<span className="message-timestamp">
//                 					9/13/2016 11:53:59 PM
//                 				</span>
//                 			</div>
//                 		</div>

//                 		<div className="chat-message">
//                 			<div className="message-right">
//                 				<div className="message-bubble blue-bubble">
//                 					Would you like to leave a message for Oles? I'd be happy to forward it to him.
//                 				</div>
//                 				<span className="message-timestamp">
//                 					9/13/2016 11:54:00 PM
//                 				</span>
//                 			</div>
//                 		</div>

//                 	</div>

//                     <form id="chat-form" className="chat-input" onSubmit={(e)=>this.onSubmit(e)}>
//                         <input type="text" className="chat-input--fill" name="message" placeholder="Your message..." maxLength="40"/>
//                         <input type="submit" className="chat-input--bg" id="chat-submit" />
//                     </form>

//                 </div>

// 			</Modal>
// 		);
// 	}
// }

// export default ContactModal;