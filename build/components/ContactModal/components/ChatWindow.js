"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChatWindow = function ChatWindow() {
	return _react2.default.createElement(
		"div",
		{ id: "chat-window", className: "chat-box" },
		_react2.default.createElement(
			"div",
			{ className: "chat-message" },
			_react2.default.createElement(
				"div",
				{ className: "message-left" },
				_react2.default.createElement(
					"div",
					{ className: "message-bubble grey-bubble" },
					"Hello"
				),
				_react2.default.createElement(
					"span",
					{ className: "message-timestamp" },
					"9/13/2016 11:53:58 PM"
				)
			)
		),
		_react2.default.createElement(
			"div",
			{ className: "chat-message" },
			_react2.default.createElement(
				"div",
				{ className: "message-right" },
				_react2.default.createElement(
					"div",
					{ className: "message-bubble blue-bubble" },
					"Hey! Thanks for stopping by."
				),
				_react2.default.createElement(
					"span",
					{ className: "message-timestamp" },
					"9/13/2016 11:53:59 PM"
				)
			)
		),
		_react2.default.createElement(
			"div",
			{ className: "chat-message" },
			_react2.default.createElement(
				"div",
				{ className: "message-right" },
				_react2.default.createElement(
					"div",
					{ className: "message-bubble blue-bubble" },
					"Would you like to leave a message for Oles? I'd be happy to forward it to him."
				),
				_react2.default.createElement(
					"span",
					{ className: "message-timestamp" },
					"9/13/2016 11:54:00 PM"
				)
			)
		)
	);
};

exports.default = ChatWindow;