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
    require('stylesRoot/views/projects.scss');
}

var Projects = function (_React$Component) {
    _inherits(Projects, _React$Component);

    function Projects(pros) {
        _classCallCheck(this, Projects);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Projects).call(this));
    }

    _createClass(Projects, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('Projects => componentDidMount');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'mainContent__projects', role: 'main' },
                _react2.default.createElement(
                    'div',
                    { className: 'mainContent__projectsContainer' },
                    _react2.default.createElement(
                        'section',
                        { className: 'section__leftContent' },
                        _react2.default.createElement(
                            'div',
                            { className: 'section__container section__container--detailed' },
                            _react2.default.createElement(
                                'div',
                                { className: 'section__projectDetails' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'projectDetails__header' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'projectDetails__headerTitle' },
                                        _react2.default.createElement(
                                            'h3',
                                            null,
                                            'Sample Project Name'
                                        ),
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'projectDetails__links' },
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '#', className: 'projectDetails__button info' },
                                                    'Project Information'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '#', className: 'projectDetails__button link' },
                                                    'Project Link'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'section__rightContent' },
                        _react2.default.createElement(
                            'div',
                            { className: 'section__container section__container--summary' },
                            _react2.default.createElement(
                                'div',
                                { className: 'section__allProjects' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'allProjects__header' },
                                    _react2.default.createElement(
                                        'h3',
                                        null,
                                        'Projects'
                                    )
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'allProjects__projectList' },
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'project', 'data-url': 'http://realtorsuite.com', 'data-img': 'test.jpg', 'data-page': 'realtor-suite' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'project__title' },
                                            _react2.default.createElement(
                                                'h4',
                                                null,
                                                'Realtor Suite Platform'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'project__image' },
                                            _react2.default.createElement('img', { src: './assets/images/projects/realtor-suite.jpg' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'project__description' },
                                            'A full scale web and mobile application for residential Realtors to use at open houses. Currently being developed using the Laravel framework for an Alpha release for a team of investors.'
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#', className: 'project__button' },
                                            'Project Details'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'project', 'data-url': 'http://apple.com', 'data-img': 'test2.jpg', 'data-page': 'star-slam' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'project__title' },
                                            _react2.default.createElement(
                                                'h4',
                                                null,
                                                'Star Slam Game'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'project__image' },
                                            _react2.default.createElement('img', { src: './assets/images/projects/star-slam.jpg' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'project__description' },
                                            'iOS and Android App “Star Slam”. Built with HTML5 Canvas and Javascript. Was ported to mobile using Cordova and CocoonJS. Has over 500 downloads from around the world through the Appstore and Google Play Store.'
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#', className: 'project__button' },
                                            'Project Details'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'project', 'data-url': 'http://liveinchinatown.com', 'data-img': 'work.jpg', 'data-page': 'none' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'project__title' },
                                            _react2.default.createElement(
                                                'h4',
                                                null,
                                                'LiveIN Website Network'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'project__image' },
                                            _react2.default.createElement('img', { src: './assets/images/projects/live-in.jpg' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'project__description' },
                                            'Updated, maintained and contributed to the overall front and backend architecture of the main LiveIN websites.Provided expertise on technical features of the website and business strategy.'
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#', className: 'project__button' },
                                            'Project Details'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'project' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'project__title', 'data-url': 'http://andrienko.co/naturylbornkillers/', 'data-img': 'video-wall.jpg', 'data-page': 'none' },
                                            _react2.default.createElement(
                                                'h4',
                                                null,
                                                'Naturyl Born Killers Webstore'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'project__image' },
                                            _react2.default.createElement('img', { src: './assets/images/projects/nbk.jpg' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'project__description' },
                                            'Originally developed as a custom eCommerce mockup for a popular user on Instagram. Built on top of the Community Edition of the Magento eCommerce platform.'
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#', className: 'project__button' },
                                            'Project Details'
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Projects;
}(_react2.default.Component);

exports.default = Projects;