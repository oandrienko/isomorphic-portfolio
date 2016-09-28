'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _ModalRoot = require('./components/ModalRoot');

var _ModalRoot2 = _interopRequireDefault(_ModalRoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.BROWSER) {
	require('stylesRoot/components/chat_modal.scss');
}

var store = (0, _config2.default)();

var ContactModal = function ContactModal(props) {
	return _react2.default.createElement(_ModalRoot2.default, _extends({ store: store }, props));
};

exports.default = ContactModal;