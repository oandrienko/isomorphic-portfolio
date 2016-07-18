import React from 'react';
import Modal from 'react-modal';

if (process.env.BROWSER) {
	require('stylesRoot/components/modal.scss');
}

class ContactForm extends React.Component {
	constructor(props) {
		super();
	}
}

export default class ContactModal extends React.Component {
	constructor(props) {
		super();
	}

	onSubmit(e) {
		//TODO: finish this...
		
		e.preventDefault();

		let message = 'Thank you! Your message was sent.'
		let data = $( "#send-form" ).serialize();
		$.post( '/mail/send', data).done(function(res) {
			console.log( "Data Sent: " + res );
			if (res['success'] !== true) {
				console.log('sucess is false...');
				message = 'Please fill in all fields properly and try again.';
			}
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
                        <input type="text" name="name" placeholder="Full Name" maxlength="40"/>
                        <input type="text" name="email" placeholder="Your Email" maxlength="40"/>

                        <input className="hidden" type="text" name="honey-email" value=""/>

                        <textarea name="message" placeholder="What you'd like to send yo me." rows="5"></textarea>
                        <input type="submit" value="Send Away" id="submit-button" />
                    </form>
                    <div id="under-text"></div>
                </div>

			</Modal>
		);
	}
}