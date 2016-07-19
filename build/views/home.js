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

if (process.env.BROWSER) {
    require('stylesRoot/views/home.scss');
}

//TODO: Remove JQuery dependencies 
//TODO: Seperate scroll component that wraps HOME

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(pros) {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this));
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('Home => componentDidMount');

            if ($('#home-video').get(0)) $('#home-video').get(0).play();

            $(window).on('scroll load', this.renderAnimation_bgFading);
            $(window).on('resize load', this.renderAnimation_bgSizing);
            this.renderAnimation_bgSizing();
            this.renderAnimation_bgFading();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('Home => ***componentDidUnmount');
        }
    }, {
        key: 'renderAnimation_bgSizing',
        value: function renderAnimation_bgSizing() {

            var bgHeight,
                bgWidth,
                bgElements = $('.section__background img');
            bgElements.each(function (i, val) {
                if ($(window).width() > $(window).height()) {
                    bgHeight = 'auto';
                    bgWidth = $(window).width();
                } else {
                    bgHeight = $(window).height() - 75;
                    bgWidth = 'auto';
                }
                $(this).css({
                    'height': bgHeight * 1.2,
                    'width': bgWidth * 1.2
                });
            });
        }
    }, {
        key: 'renderAnimation_bgFading',
        value: function renderAnimation_bgFading() {

            var st,
                height,
                transform,
                mainSections = $('.m-section'),
                parallaxElements = $('.mainVideo__overlay, .section__background.change');
            mainSections.each(function (i, val) {
                if ($(window).scrollTop() >= $(this).offset().top - 75 && $(window).scrollTop() <= $(this).offset().top + $(this).height() - 75) {

                    st = $(window).scrollTop() - i * $(this).height();
                    height = $(this).height();
                    $(this).css({
                        'opacity': Math.pow(1 - st / height, 2)
                    });

                    transform = 200 * (st / height);
                    parallaxElements.eq(i).css({
                        'transform': 'translateY(' + transform + 'px)'
                    });
                } else {

                    if ($(window).scrollTop() <= $(this).offset().top + $(this).height() - 75) {
                        // element is below
                        $(this).css({
                            'opacity': 1
                        });
                        parallaxElements.eq(i).css({
                            'transform': 'translateY(0px)'
                        });
                    } else {
                        $(this).css({
                            'opacity': 0
                        });
                    }
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var width = typeof window == 'undefined' ? new Object() : window.innerWidth;
            return _react2.default.createElement(
                'div',
                { className: 'mainContent', role: 'main' },
                _react2.default.createElement(
                    'div',
                    { className: 'mainContent__container' },
                    _react2.default.createElement(
                        'section',
                        { id: 'introBlock', className: 'm-section' },
                        _react2.default.createElement(
                            'div',
                            { className: 'mainVideo' },
                            _react2.default.createElement(
                                'div',
                                { className: 'mainVideo__container' },
                                width > 768 ? _react2.default.createElement(
                                    'video',
                                    { id: 'home-video', className: 'mainVideo__video', loop: 'loop', autoPlay: 'true' },
                                    _react2.default.createElement('source', { type: 'video/mp4', src: '/images/bg_mainvideo.mp4' }),
                                    _react2.default.createElement('source', { type: 'video/mp4', src: '/images/bg_mainvideo.mov' })
                                ) : _react2.default.createElement(
                                    'div',
                                    { className: 'mainVideo__mobile' },
                                    _react2.default.createElement('img', { className: 'mainVideo__mobile--image', src: '/images/bg_mainmobile.jpg' })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'mainVideo__overlay' },
                            _react2.default.createElement('div', { className: 'mainVideo__colorOverlay' }),
                            _react2.default.createElement('h2', { className: 'mainVideo__logo' }),
                            _react2.default.createElement(
                                'h2',
                                { className: 'mainVideo__titleOverlay mainContent__text' },
                                'Hello, It\'s Nice to Meet You'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'section',
                        { id: 'aboutBlock', className: 'm-section' },
                        _react2.default.createElement(
                            'div',
                            { className: 'section__background change' },
                            _react2.default.createElement('img', { src: '/images/bg_circuit.jpg', alt: 'background engineer electrical hardware' })
                        ),
                        _react2.default.createElement(
                            'article',
                            { className: 'section__content section__content--blackText' },
                            _react2.default.createElement(
                                'p',
                                null,
                                'My name is Oles Andrienko. I\'m a student at the University of Waterloo studying Mechatronics Engineering. I love to work on technology projects that have an emphasis on software and business.'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'section',
                        { id: 'aboutBlock', className: 'm-section' },
                        _react2.default.createElement(
                            'div',
                            { className: 'section__background change' },
                            _react2.default.createElement('img', { src: '/images/bg_engineer.jpg', alt: 'background engineer mechanical hardware' })
                        ),
                        _react2.default.createElement(
                            'article',
                            { className: 'section__content section__content--blackText right' },
                            _react2.default.createElement(
                                'p',
                                null,
                                'Whether it\'s building with the newest software library or keeping up with popular tech trends - I\'m always looking to learn something new. Check out some of my recent',
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/projects' },
                                    'Projects'
                                ),
                                ' here on my website.'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'section',
                        { id: 'aboutBlock', className: 'm-section' },
                        _react2.default.createElement(
                            'div',
                            { className: 'section__background change' },
                            _react2.default.createElement('img', { src: '/images/bg_awardgroup.jpg', alt: 'background award group photo' })
                        ),
                        _react2.default.createElement(
                            'article',
                            { className: 'section__content section__content--blackText' },
                            _react2.default.createElement(
                                'p',
                                null,
                                'Do you have a project that you need help with? Are you looking for a developer for your latest app idea? Do you need an engineer in training to add to your current team? Let\'s work on something awesome together, ',
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/contact' },
                                    'Contact Me'
                                ),
                                '.'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'section',
                        { id: 'linksBlock', className: 'm-section' },
                        _react2.default.createElement(
                            'div',
                            { className: 'section__background' },
                            _react2.default.createElement('img', { className: 'center', src: '/images/bg_toronto.jpg' })
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'section__halfContent' },
                            _react2.default.createElement(
                                'li',
                                { className: 'section__halfContent--link' },
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: 'projects' },
                                    'Browse Projects'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'section__halfContent--link' },
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: 'about' },
                                    'More About Me'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement('div', { className: 'mainContent__footer' })
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = Home;