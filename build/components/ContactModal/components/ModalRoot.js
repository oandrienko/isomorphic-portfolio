'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ChatWindow = require('./ChatWindow');

var _ChatWindow2 = _interopRequireDefault(_ChatWindow);

var _ChatInput = require('./ChatInput');

var _ChatInput2 = _interopRequireDefault(_ChatInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalRoot = function (_React$Component) {
	_inherits(ModalRoot, _React$Component);

	function ModalRoot(props) {
		_classCallCheck(this, ModalRoot);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalRoot).call(this));

		_this.state = { message: '' };
		return _this;
	}

	_createClass(ModalRoot, [{
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
			var _props = this.props;
			var store = _props.store;
			var modalIsOpen = _props.modalIsOpen;
			var closeModal = _props.closeModal;

			return _react2.default.createElement(
				_reactRedux.Provider,
				{ store: store },
				_react2.default.createElement(
					_reactModal2.default,
					{
						className: 'mainContact__modal',
						isOpen: modalIsOpen,
						onRequestClose: closeModal,
						shouldCloseOnOverlayClick: true
					},
					_react2.default.createElement(_ModalHeader2.default, { closeModal: closeModal }),
					_react2.default.createElement(_ChatWindow2.default, null),
					_react2.default.createElement(_ChatInput2.default, null)
				)
			);
		}
	}]);

	return ModalRoot;
}(_react2.default.Component);

exports.default = ModalRoot;