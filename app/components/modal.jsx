import React from 'react';
import Modal from 'react-modal';

if (process.env.BROWSER) {
	require('stylesRoot/components/modal.scss');
}

//TODO: finish this... Add frontend validation
// Also need to make form a seperate controlled component

// class ContactForm extends React.Component {
// 	constructor(props) {
// 		super();
// 	}
// }

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