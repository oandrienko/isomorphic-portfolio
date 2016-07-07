'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
	require('stylesRoot/views/links.scss');
}

var Links = function (_React$Component) {
	_inherits(Links, _React$Component);

	function Links(pros) {
		_classCallCheck(this, Links);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Links).call(this));
	}

	_createClass(Links, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log('Links => componentDidMount');
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ 'class': 'mainContent__links', role: 'main' },
				_react2.default.createElement(
					'div',
					{ 'class': 'mainContent__linksContainer' },
					_react2.default.createElement(
						'section',
						{ 'class': 'links__content' },
						_react2.default.createElement(
							'div',
							{ 'class': 'links__content--text' },
							_react2.default.createElement(
								'ul',
								{ className: 'links__body-links' },
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '#lindedin', className: 'links__link' },
										'LinkedIn'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '#github', className: 'links__link' },
										'Github'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '#email', className: 'links_link' },
										'Email'
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Links;
}(_react2.default.Component);

exports.default = Links;