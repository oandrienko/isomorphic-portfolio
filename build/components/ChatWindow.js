'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChatWindow = function ChatWindow(_ref) {
	var messages = _ref.messages;
	var isFetching = _ref.isFetching;
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
};

var mapStateToWindowProps = function mapStateToWindowProps(state, containerProps) {
	console.log('State with messages:', state.messages);
	return {
		messages: state.messages,
		isFetching: state.isFetching
	};
};

ChatWindow = (0, _reactRedux.connect)(mapStateToWindowProps)(ChatWindow);

exports.default = ChatWindow;