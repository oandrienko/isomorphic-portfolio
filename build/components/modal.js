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
}

var ContactForm = function (_React$Component) {
	_inherits(ContactForm, _React$Component);

	function ContactForm(props) {
		_classCallCheck(this, ContactForm);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ContactForm).call(this));
	}

	return ContactForm;
}(_react2.default.Component);

var ContactModal = function (_React$Component2) {
	_inherits(ContactModal, _React$Component2);

	function ContactModal(props) {
		_classCallCheck(this, ContactModal);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ContactModal).call(this));
	}

	_createClass(ContactModal, [{
		key: 'onSubmit',
		value: function onSubmit(e) {
			//TODO: finish this...

			e.preventDefault();

			var message = 'Thank you! Your message was sent.';
			var data = $("#send-form").serialize();
			$.post('/mail/send', data).done(function (res) {
				console.log("Data Sent: " + res);
				if (res['success'] !== true) {
					console.log('sucess is false...');
					message = 'Please fill in all fields properly and try again.';
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

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
								return _this3.onSubmit(e);
							} },
						_react2.default.createElement('input', { type: 'text', name: 'name', placeholder: 'Full Name', maxLength: '40' }),
						_react2.default.createElement('input', { type: 'text', name: 'email', placeholder: 'Your Email', maxLength: '40' }),
						_react2.default.createElement('input', { className: 'hidden', type: 'text', name: 'honey-email', value: '' }),
						_react2.default.createElement('textarea', { name: 'message', placeholder: 'What you\'d like to send yo me.', rows: '5' }),
						_react2.default.createElement('input', { type: 'submit', value: 'Send Away', id: 'submit-button' })
					),
					_react2.default.createElement('div', { id: 'under-text' })
				)
			);
		}
	}]);

	return ContactModal;
}(_react2.default.Component);

exports.default = ContactModal;