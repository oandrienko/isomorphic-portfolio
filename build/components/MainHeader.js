'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

require('whatwg-fetch');

var _contactBot = require('contact-bot');

var _contactBot2 = _interopRequireDefault(_contactBot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainNavigation = function MainNavigation(_ref) {
    var openModal = _ref.openModal,
        onClick = _ref.onClick,
        mobileState = _ref.mobileState;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { role: 'navigation' },
            _react2.default.createElement(
                'ul',
                { className: 'mainNav__links mainNav__links--navCenter' },
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: 'mainNav__link mainNav__link--navCenter', to: '/about' },
                        'About'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: 'mainNav__link mainNav__link--navCenter', to: '/work' },
                        'Work'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { id: 'tooltip' },
                    (process.env.BROWSER ? window.innerWidth : 0) > 768 ? // eslint-disable-line
                    _react2.default.createElement(
                        'a',
                        { className: 'mainNav__link mainNav__link--navCenter' },
                        'Links'
                    ) : _react2.default.createElement(
                        _reactRouter.Link,
                        { className: 'mainNav__link mainNav__link--navCenter', to: '/links' },
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
                                        {
                                            className: 'tooltip__link blue',
                                            href: 'http://www.linkedin.com/in/oandrienko',
                                            target: '_blank'
                                        },
                                        'LinkedIn'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        {
                                            className: 'tooltip__link purple',
                                            href: 'http://github.com/oandrienko',
                                            target: '_blank'
                                        },
                                        'Github'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        {
                                            className: 'tooltip__link orange',
                                            href: 'mailto:oandrien@uwaterloo.ca',
                                            target: '_blank'
                                        },
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
                    { onClick: openModal, id: 'mainModal__toggle', className: 'mainNav__contact--link' },
                    'Contact Bot'
                )
            )
        ),
        _react2.default.createElement(MobileNavButton, { contactName: 'Oles', onClick: onClick, mobileState: mobileState })
    );
};

var MobileNavButton = function MobileNavButton(_ref2) {
    var mobileState = _ref2.mobileState,
        onClick = _ref2.onClick;
    return _react2.default.createElement(
        'div',
        { className: 'toggleNav' },
        _react2.default.createElement(
            'button',
            {
                className: 'toggleNav__stackMenu toggleNav__stack-X ' + (mobileState ? 'is-active' : ''),
                onClick: onClick
            },
            _react2.default.createElement(
                'span',
                null,
                'Toggle Mobile Menu'
            )
        )
    );
};

var MobileNavMenu = function MobileNavMenu(_ref3) {
    var mobileState = _ref3.mobileState,
        openModal = _ref3.openModal,
        onClick = _ref3.onClick;
    return _react2.default.createElement(
        'div',
        { className: 'navOverlay ' + (mobileState ? 'is-active' : '') },
        _react2.default.createElement(
            'div',
            { className: 'navOverlay__container' },
            _react2.default.createElement(
                'div',
                { role: 'navigation' },
                _react2.default.createElement(
                    'ul',
                    { className: 'navOverlay__selections' },
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { onClick: onClick, to: '/about' },
                            'About'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { onClick: onClick, to: '/projects' },
                            'Projects'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { onClick: onClick, to: '/links' },
                            'Links'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'a',
                            { onClick: openModal },
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
                        '\xA9 Oles Andrienko 2016'
                    )
                )
            )
        )
    );
};

var MainHeader = function (_React$Component) {
    _inherits(MainHeader, _React$Component);

    function MainHeader() {
        _classCallCheck(this, MainHeader);

        var _this = _possibleConstructorReturn(this, (MainHeader.__proto__ || Object.getPrototypeOf(MainHeader)).call(this));

        _this.state = {
            isMobileOpen: false,
            modalIsOpen: false
        };
        _this.closeMobileNav = _this.closeMobileNav.bind(_this);
        _this.toggleMobileNav = _this.toggleMobileNav.bind(_this);
        _this.openModal = _this.openModal.bind(_this);
        _this.closeModal = _this.closeModal.bind(_this);
        return _this;
    }

    _createClass(MainHeader, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            $(window).on('resize', function () {
                _this2.closeMobileNav();
            });
        }
    }, {
        key: 'closeMobileNav',
        value: function closeMobileNav() {
            this.setState({
                isMobileOpen: false
            });
        }
    }, {
        key: 'sendEmail',
        value: function sendEmail(body) {
            fetch('/mail/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ body: body })
            }).then(function (res) {
                if (res.err) console.error('Error: [MainHeader.sendEmail] request failed:  ', res.err);
                return res;
            });
        }
    }, {
        key: 'toggleMobileNav',
        value: function toggleMobileNav() {
            this.setState({
                isMobileOpen: !this.state.isMobileOpen
            });
            $('body').toggleClass('no-scroll');
        }
    }, {
        key: 'openModal',
        value: function openModal() {
            console.log("Open model...");
            this.setState({ modalIsOpen: true });
        }
    }, {
        key: 'closeModal',
        value: function closeModal() {
            this.setState({ modalIsOpen: false });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                    'div',
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
                                    {
                                        className: 'mainHeader__mainTitle--link',
                                        ref: 'logo',
                                        onClick: this.closeMobileNav,
                                        to: '/'
                                    },
                                    'Oles Andrienko'
                                )
                            )
                        ),
                        _react2.default.createElement(MainNavigation, {
                            openModal: this.openModal,
                            onClick: this.toggleMobileNav,
                            mobileState: this.state.isMobileOpen
                        })
                    )
                ),
                _react2.default.createElement(MobileNavMenu, {
                    openModal: this.openModal,
                    onClick: this.toggleMobileNav,
                    mobileState: this.state.isMobileOpen
                }),
                _react2.default.createElement(_contactBot2.default, {
                    loaderImagePath: '/bundles/loader.gif',
                    isOpen: this.state.modalIsOpen,
                    onClose: this.closeModal,
                    onSubmitMessageThread: this.sendEmail
                })
            );
        }
    }]);

    return MainHeader;
}(_react2.default.Component);

exports.default = MainHeader;