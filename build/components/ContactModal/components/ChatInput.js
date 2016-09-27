'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('./../actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChatInput = function ChatInput(_ref) {
	var dispatch = _ref.dispatch;


	return _react2.default.createElement(
		'form',
		{ id: 'chat-form',
			className: 'chat-input',
			onSubmit: function onSubmit() {
				dispatch(actions.sendMessage);
			} },
		_react2.default.createElement('input', { type: 'text', className: 'chat-input--fill', name: 'message', placeholder: 'Your message...', maxLength: '40' }),
		_react2.default.createElement('input', { type: 'submit', className: 'chat-input--bg', id: 'chat-submit' })
	);
};

ChatInput = (0, _reactRedux.connect)()(ChatInput);

exports.default = ChatInput;