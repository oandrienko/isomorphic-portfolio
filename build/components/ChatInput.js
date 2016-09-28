'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import uuid from 'uuid';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _reactRedux = require('react-redux');

var _actions = require('./../actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatInputForm = function ChatInputForm(_ref) {
	var message = _ref.fields.message;
	var handleSubmit = _ref.handleSubmit;

	return _react2.default.createElement(
		'form',
		{ onSubmit: handleSubmit, className: 'chat-input' },
		_react2.default.createElement('input', _extends({ type: 'text'
		}, message, {
			className: 'chat-input--fill',
			placeholder: 'Your message...',
			maxLength: '40',
			autoComplete: 'off' })),
		_react2.default.createElement(
			'button',
			{ type: 'submit', className: 'chat-input--bg' },
			'Submit'
		)
	);
};

ChatInputForm = (0, _reduxForm.reduxForm)({
	form: 'add-messages',
	fields: ['message']
})(ChatInputForm);

var ChatInput = function (_React$Component) {
	_inherits(ChatInput, _React$Component);

	function ChatInput() {
		_classCallCheck(this, ChatInput);

		var _this = _possibleConstructorReturn(this, (ChatInput.__proto__ || Object.getPrototypeOf(ChatInput)).call(this));

		_this.handleSubmit = _this.handleSubmit.bind(_this);
		return _this;
	}

	_createClass(ChatInput, [{
		key: 'handleSubmit',
		value: function handleSubmit(data) {
			var _props = this.props;
			var dispatch = _props.dispatch;
			var context = _props.context;
			var onNewUserId = _props.onNewUserId;
			var onNewMessage = _props.onNewMessage;
			var onFormReset = _props.onFormReset;


			var user = this.props.userId,
			    msg = data.message;

			if (!user) {
				// user = uuid.v4();
				console.log('user doesnt exist, creating new', user);
				onNewUserId(user);
			}

			if (msg && msg.trim().length > 0) onNewMessage(user, msg, context);
			onFormReset();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(ChatInputForm, _extends({
				onSubmit: this.handleSubmit
			}, this.props));
		}
	}]);

	return ChatInput;
}(_react2.default.Component);

var mapStateToInputProps = function mapStateToInputProps(state) {
	return {
		userId: state.user.id,
		context: state.user.context
	};
};

var mapDispacheToInputProps = function mapDispacheToInputProps(dispatch) {
	return {
		onNewUserId: function onNewUserId(id) {
			dispatch(actions.setUserId(id));
		},
		onNewMessage: function onNewMessage(user, message, context) {
			dispatch(actions.sendMessage(user, message, context));
		},
		onFormReset: function onFormReset() {
			dispatch((0, _reduxForm.reset)('add-messages'));
		}
	};
};

ChatInput = (0, _reactRedux.connect)(mapStateToInputProps, mapDispacheToInputProps)(ChatInput);

exports.default = ChatInput;