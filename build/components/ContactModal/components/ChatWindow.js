'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatWindow = function (_React$Component) {
	_inherits(ChatWindow, _React$Component);

	function ChatWindow() {
		_classCallCheck(this, ChatWindow);

		return _possibleConstructorReturn(this, (ChatWindow.__proto__ || Object.getPrototypeOf(ChatWindow)).apply(this, arguments));
	}

	_createClass(ChatWindow, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			_reactDom2.default.findDOMNode(this).scrollTop = _reactDom2.default.findDOMNode(this).scrollHeight;
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props;
			var messages = _props.messages;
			var isFetching = _props.isFetching;

			return _react2.default.createElement(
				'div',
				{ id: 'chat-window', className: 'chat-box' },
				messages.map(function (msg, i) {
					return _react2.default.createElement(
						'div',
						{ key: i, className: 'chat-message' },
						_react2.default.createElement(
							'div',
							{ className: msg.user === null ? 'message-left' : 'message-right' },
							_react2.default.createElement(
								'div',
								{ className: msg.user === null ? 'message-bubble grey-bubble' : 'message-bubble blue-bubble' },
								msg.message
							),
							_react2.default.createElement(
								'span',
								{ className: 'message-timestamp' },
								msg.timestamp
							)
						)
					);
				}),
				messages.length === 0 ? _react2.default.createElement(
					'p',
					{ className: 'chat-empty' },
					'Enter a message to send to chatbot'
				) : null,
				isFetching ? _react2.default.createElement(
					'div',
					{ className: 'chat-message' },
					_react2.default.createElement(
						'div',
						{ className: 'message-left' },
						_react2.default.createElement(
							'div',
							{ className: 'message-bubble grey-bubble sm-padding' },
							_react2.default.createElement('img', { width: '35px', height: '20px', src: '/images/chat_fetch.gif', alt: 'fetching bubble' })
						),
						_react2.default.createElement('span', { className: 'message-timestamp' })
					)
				) : null
			);
		}
	}]);

	return ChatWindow;
}(_react2.default.Component);

var mapStateToWindowProps = function mapStateToWindowProps(state, containerProps) {
	console.log('State with messages:', state.messages);
	return {
		messages: state.messages,
		isFetching: state.isFetching
	};
};

ChatWindow = (0, _reactRedux.connect)(mapStateToWindowProps)(ChatWindow);

exports.default = ChatWindow;