"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalHeader = function ModalHeader(props) {
	return _react2.default.createElement(
		"div",
		{ className: "modal-header" },
		_react2.default.createElement(
			"button",
			{ onClick: props.closeModal, className: "close-button red-tint" },
			_react2.default.createElement(
				"span",
				{ className: "close-button--label" },
				"x"
			)
		),
		_react2.default.createElement(
			"button",
			{ onClick: props.closeModal, className: "close-button yellow-tint" },
			_react2.default.createElement(
				"span",
				{ className: "close-button--label" },
				"-"
			)
		),
		_react2.default.createElement(
			"button",
			{ onClick: props.closeModal, className: "close-button green-tint" },
			_react2.default.createElement(
				"span",
				{ className: "close-button--label" },
				"+"
			)
		),
		_react2.default.createElement(
			"h2",
			{ className: "modal-title" },
			"Chat with Contact Bot"
		)
	);
};

exports.default = ModalHeader;