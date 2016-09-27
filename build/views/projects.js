'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _projects2 = require('./_projects');

var _projects3 = _interopRequireDefault(_projects2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
    require('stylesRoot/views/projects.scss');
}

//TODO: setup MongoDB with simple API for getting/setting projects

var ProjectsItem = function ProjectsItem(props) {
    return _react2.default.createElement(
        'li',
        { className: 'project' },
        _react2.default.createElement(
            'div',
            { className: 'project__title' },
            _react2.default.createElement(
                'h4',
                null,
                props.project.name
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'project__image' },
            _react2.default.createElement('img', { src: props.project.thumbnail })
        ),
        _react2.default.createElement(
            'div',
            { className: 'project__description' },
            props.project.description
        ),
        _react2.default.createElement(
            _reactRouter.Link,
            {
                className: 'project__button',
                to: '/projects/' + props.project.slug,
                onClick: props.onClick },
            'Read More'
        )
    );
};

var Projects = function (_React$Component) {
    _inherits(Projects, _React$Component);

    function Projects(props) {
        _classCallCheck(this, Projects);

        var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));

        _this.state = {
            currentProject: props.projects[0],
            bannerLinks: {}
        };
        return _this;
    }

    _createClass(Projects, [{
        key: 'changeProjectBanner',
        value: function changeProjectBanner(projectIndex) {
            if ($(window).width() < 768) {
                $("html, body").animate({ scrollTop: 0 }, 400);
            }
            this.setState({
                currentProject: this.props.projects[projectIndex]
            });
        }
    }, {
        key: 'toggleHover',
        value: function toggleHover(i) {
            var newState = {};
            if (this.state.bannerLinks[i]) {
                this.state.bannerLinks[i] = !this.state.bannerLinks[i];
            } else {
                this.state.bannerLinks[i] = true;
            }
            this.setState({ bannerLinks: this.state.bannerLinks });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var projects = this.props.projects.map(function (project, i) {
                var boundClick = _this2.changeProjectBanner.bind(_this2, i);
                return _react2.default.createElement(ProjectsItem, { project: project, onClick: boundClick, key: i });
            });

            var links = this.state.currentProject.links.map(function (link, i) {
                var onHover = _this2.toggleHover.bind(_this2, i);
                var hoverColor = _this2.state.bannerLinks[i] == true ? { color: link.color, borderColor: link.color } : { color: 'white', borderColor: 'white' };
                return _react2.default.createElement(
                    'li',
                    { key: i,
                        onMouseEnter: onHover,
                        onMouseLeave: onHover },
                    _react2.default.createElement(
                        'a',
                        { target: '_blank',
                            href: link.url,
                            style: hoverColor,
                            className: 'projectDetails__button info'
                        },
                        link.title
                    )
                );
            });

            var bannerImage = {
                backgroundImage: 'url(' + this.state.currentProject.bgImageUrl + ')'
            };

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
                                { className: 'section__projectDetails',
                                    style: bannerImage },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'projectDetails__header' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'projectDetails__headerTitle' },
                                        _react2.default.createElement(
                                            'h3',
                                            null,
                                            this.state.currentProject.name
                                        ),
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'projectDetails__links' },
                                            links
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
                                    projects
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

Projects.defaultProps = _projects3.default;

exports.default = Projects;