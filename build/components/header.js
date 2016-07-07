'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import ContactModal from 'appRoot/js/components/modal';

if (process.env.BROWSER) {
	require('stylesRoot/components/header.scss');
}

var MainNav = function (_React$Component) {
	_inherits(MainNav, _React$Component);

	function MainNav() {
		_classCallCheck(this, MainNav);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(MainNav).apply(this, arguments));
	}

	_createClass(MainNav, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'nav',
					{ role: 'navigation' },
					_react2.default.createElement(
						'ul',
						{ className: 'mainNav__links mainNav__links--navCenter' },
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ className: 'mainNav__link mainNav__link--navCenter', to: 'about' },
								'About'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ className: 'mainNav__link mainNav__link--navCenter', to: 'projects' },
								'Projects'
							)
						),
						_react2.default.createElement(
							'li',
							{ id: 'tooltip' },
							_react2.default.createElement(
								_reactRouter.Link,
								{ className: 'mainNav__link mainNav__link--navCenter', to: 'links' },
								'Links'
							),
							_react2.default.createElement(
								'div',
								{ className: 'mainNav__tooltip' },
								_react2.default.createElement(
									'span',
									{ className: 'mainNav__tooltip--text' },
									_react2.default.createElement(
										'ul',
										{ className: 'tooltip__links' },
										_react2.default.createElement(
											'li',
											null,
											_react2.default.createElement(
												'a',
												{ href: '#lindedin', className: 'tooltip__link' },
												'LinkedIn'
											)
										),
										_react2.default.createElement(
											'li',
											null,
											_react2.default.createElement(
												'a',
												{ href: '#github', className: 'tooltip__link' },
												'Github'
											)
										),
										_react2.default.createElement(
											'li',
											null,
											_react2.default.createElement(
												'a',
												{ href: '#email', className: 'tooltip__link' },
												'Email'
											)
										)
									)
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'mainNav__contact mainNav__contact--navRight' },
						_react2.default.createElement(
							'a',
							{ id: 'mainModal__toggle', className: 'mainNav__contact--link', href: '#modal' },
							'Contact Bot'
						)
					)
				),
				_react2.default.createElement(MobileNavButton, { onClick: this.props.onClick, mobileState: this.props.mobileState })
			);
		}
	}]);

	return MainNav;
}(_react2.default.Component);

var MobileNavButton = function (_React$Component2) {
	_inherits(MobileNavButton, _React$Component2);

	function MobileNavButton() {
		_classCallCheck(this, MobileNavButton);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(MobileNavButton).apply(this, arguments));
	}

	_createClass(MobileNavButton, [{
		key: 'render',
		value: function render() {
			var toggleClass = this.props.mobileState ? 'is-active' : '';
			return _react2.default.createElement(
				'div',
				{ className: 'toggleNav' },
				_react2.default.createElement(
					'button',
					{ onClick: this.props.onClick,
						className: 'toggleNav__stackMenu toggleNav__stack-X ' + toggleClass },
					_react2.default.createElement(
						'span',
						null,
						'Toggle Mobile Menu'
					)
				)
			);
		}
	}]);

	return MobileNavButton;
}(_react2.default.Component);

var MobileNavMenu = function (_React$Component3) {
	_inherits(MobileNavMenu, _React$Component3);

	function MobileNavMenu() {
		_classCallCheck(this, MobileNavMenu);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(MobileNavMenu).apply(this, arguments));
	}

	_createClass(MobileNavMenu, [{
		key: 'render',
		value: function render() {
			var toggleClass = this.props.mobileState ? 'is-active' : '';
			return _react2.default.createElement(
				'div',
				{ className: 'navOverlay ' + toggleClass },
				_react2.default.createElement(
					'div',
					{ className: 'navOverlay__container' },
					_react2.default.createElement(
						'nav',
						{ role: 'navigation' },
						_react2.default.createElement(
							'ul',
							{ className: 'navOverlay__selections' },
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: 'about' },
									'About'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: 'projects' },
									'Projects'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: 'links' },
									'Links'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: 'about' },
									'Connect'
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'navOverlay__footer' },
							_react2.default.createElement(
								'i',
								{ style: { cursor: 'cell' } },
								'© Oles Andrienko 2016'
							)
						)
					)
				)
			);
		}
	}]);

	return MobileNavMenu;
}(_react2.default.Component);

var MainHeader = function (_React$Component4) {
	_inherits(MainHeader, _React$Component4);

	function MainHeader(pros) {
		_classCallCheck(this, MainHeader);

		var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(MainHeader).call(this));

		_this4.state = { isMobileOpen: false };
		_this4.toggleMobileNav = _this4.toggleMobileNav.bind(_this4);
		return _this4;
	}

	_createClass(MainHeader, [{
		key: 'toggleMobileNav',
		value: function toggleMobileNav(e) {
			console.log('Main Header => NewStates:' + !this.state.isMobileOpen);
			var newState = { isMobileOpen: !this.state.isMobileOpen };
			this.setState(newState);
			$('body').toggleClass('no-scroll');
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'header',
					{ className: 'mainHeader' },
					_react2.default.createElement(
						'div',
						{ className: 'mainHeader__inner' },
						_react2.default.createElement(
							'div',
							{ className: 'mainHeader__logo mainHeader__logo--navLeft' },
							_react2.default.createElement(
								'h1',
								{ className: 'mainHeader__mainTitle' },
								_react2.default.createElement(
									_reactRouter.Link,
									{ className: 'mainHeader__mainTitle--link', to: '/' },
									'Oles Andrienko'
								)
							)
						),
						_react2.default.createElement(MainNav, { onClick: this.toggleMobileNav, mobileState: this.state.isMobileOpen })
					)
				),
				_react2.default.createElement(MobileNavMenu, { mobileState: this.state.isMobileOpen })
			);
		}
	}]);

	return MainHeader;
}(_react2.default.Component);

exports.default = MainHeader;


MainHeader.propTypes = {
	isMobileOpen: _react2.default.PropTypes.bool
};