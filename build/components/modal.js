'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
	require('stylesRoot/components/modal.scss');
	// require('stylesRoot/components/chat_modal.scss');
}

//TODO: finish this... Add frontend validation
// Also need to make form a seperate controlled component

var ContactModal = function (_React$Component) {
	_inherits(ContactModal, _React$Component);

	function ContactModal(props) {
		_classCallCheck(this, ContactModal);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ContactModal).call(this));

		_this.state = { message: '' };
		return _this;
	}

	_createClass(ContactModal, [{
		key: 'onSubmit',
		value: function onSubmit(e) {
			e.preventDefault();

			var self = this,
			    message = void 0,
			    data = $("#send-form").serialize();
			$.post('/mail/send', data).done(function (res) {
				console.log("Data Sent: " + res);
				res = JSON.parse(res);
				if (res.success !== true) {
					message = 'Please fill in all fields properly and try again.';
				} else {
					message = 'Thank you! Your message was sent.';
					$('#send-form').trigger('reset');
				}
				self.setState({ message: message });
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				_reactModal2.default,
				{
					className: 'mainContact__modal',
					isOpen: this.props.modalIsOpen,
					onRequestClose: this.props.closeModal,
					shouldCloseOnOverlayClick: true },
				_react2.default.createElement(
					'span',
					{ onClick: this.props.closeModal, className: 'close_button' },
					'x'
				),
				_react2.default.createElement(
					'h2',
					null,
					'Shoot me a message'
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'form',
						{ id: 'send-form', onSubmit: function onSubmit(e) {
								return _this2.onSubmit(e);
							} },
						_react2.default.createElement('input', { type: 'text', name: 'name', placeholder: 'Full Name', maxLength: '40' }),
						_react2.default.createElement('input', { type: 'text', name: 'email', placeholder: 'Your Email', maxLength: '40' }),
						_react2.default.createElement('input', { className: 'hidden', type: 'text', name: 'honey-email', value: '' }),
						_react2.default.createElement('textarea', { name: 'message', placeholder: 'What you\'d like to send yo me.', rows: '5' }),
						_react2.default.createElement(
							'div',
							{ id: 'under-text' },
							this.state.message
						),
						_react2.default.createElement('input', { type: 'submit', value: 'Send Away', id: 'submit-button' })
					)
				)
			);
		}
	}]);

	return ContactModal;
}(_react2.default.Component);

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


exports.default = ContactModal;