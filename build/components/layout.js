'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
	require('stylesRoot/components/layout.scss');
}

//TODO: Add ReactCSSTransitionGroup for animations

var MainLayout = function (_React$Component) {
	_inherits(MainLayout, _React$Component);

	function MainLayout(props) {
		_classCallCheck(this, MainLayout);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(MainLayout).call(this));
	}

	_createClass(MainLayout, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log('MainLayout => componentDidMount');
		}
	}, {
		key: 'childDidChange',
		value: function childDidChange() {
			console.log('MainLayout => CHILD DID CHANGE*******');
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			console.log('MainLayout => componentWillReceiveProps');
			console.log(nextProps);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'mainWrapper' },
				_react2.default.createElement(_header2.default, null),
				this.props.children,
				_react2.default.createElement(
					'footer',
					{ className: 'mainFooter' },
					_react2.default.createElement('a', { className: 'mainFooter__logoLink',
						href: 'https://github.com/oandrienko/isomorphic-portfolio',
						target: '_blank' })
				)
			);
		}
	}]);

	return MainLayout;
}(_react2.default.Component);

exports.default = MainLayout;