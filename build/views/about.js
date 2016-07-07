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
    require('stylesRoot/views/about.scss');
}

var About = function (_React$Component) {
    _inherits(About, _React$Component);

    function About(pros) {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(About).call(this));
    }

    _createClass(About, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('About => componentDidMount');
            $(window).on('scroll load', this.renderEffect);
            this.renderAnimation();
        }
    }, {
        key: 'renderAnimation',
        value: function renderAnimation() {
            var section = $('.about__content'),
                st,
                height;
            var st = $(window).scrollTop();
            var height = section.height();
            $('.about__img').css({
                'opacity': Math.pow(1 - st / height, 2)
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'mainContent__about', role: 'main' },
                _react2.default.createElement(
                    'div',
                    { className: 'mainContent__aboutContainer' },
                    _react2.default.createElement('section', { className: 'about__background' }),
                    _react2.default.createElement('section', { className: 'about__background m-section about__img' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'about__header' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            'ABOUT ME'
                        )
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'about__content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'about__content--text' },
                            _react2.default.createElement(
                                'p',
                                null,
                                'I’m flattered that you’d like to know more about me! I’m currently a student at the University of Waterloo studying Mechatronics Engineering - a hybrid of mechanical engineering, electrical engineering and computer science. ',
                                _react2.default.createElement('br', null),
                                _react2.default.createElement('br', null),
                                'Why study three disciplines? Other than wanting to build an Iron Man suit all by myself, I don’t want to be bound by one engineering discipline, given that innovation in the twenty-first century entails interdisciplinary engineering knowledge. I know that competency in several disciplines will provide me unique opportunities to work on a wider range of projects with less reliance on external sources. ',
                                _react2.default.createElement('br', null),
                                _react2.default.createElement('br', null),
                                'Overall, I love to create and work on awesome projects, whether it be working on the software, hardware, or mechanical side of a technical project. I have seen how engineers have solved some of the world\'s most complex problems, which is why I am always looking to learn new technologies to help me move towards my goal of becoming Tony Stark. ',
                                _react2.default.createElement('br', null),
                                _react2.default.createElement('br', null),
                                'Do you need help on your next project? Connect with me and let’s build something awesome!'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return About;
}(_react2.default.Component);

exports.default = About;