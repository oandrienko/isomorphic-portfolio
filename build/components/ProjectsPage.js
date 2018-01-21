'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProjectDetails = require('../components/ProjectDetails');

var _ProjectDetails2 = _interopRequireDefault(_ProjectDetails);

var _ProjectList = require('../components/ProjectList');

var _ProjectList2 = _interopRequireDefault(_ProjectList);

var _config = require('./../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectsPage = function (_React$Component) {
    _inherits(ProjectsPage, _React$Component);

    function ProjectsPage(props) {
        _classCallCheck(this, ProjectsPage);

        var _this = _possibleConstructorReturn(this, (ProjectsPage.__proto__ || Object.getPrototypeOf(ProjectsPage)).call(this, props));

        var initProject = _this.checkProjectRoutes(props.params.name, props.projects);

        _this.state = {
            currentProject: initProject,
            bannerLinks: {}
        };

        _this.changeProjectBanner = _this.changeProjectBanner.bind(_this);
        return _this;
    }

    _createClass(ProjectsPage, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var params = nextProps.params,
                projects = nextProps.projects;

            return this.checkProjectRoutes(params.name, projects);
        }
    }, {
        key: 'checkProjectRoutes',
        value: function checkProjectRoutes(searchKey, projects) {
            var initProject = projects[0];
            var findProjectList = projects.filter(function (p) {
                return p.slug === searchKey;
            });

            if (searchKey && findProjectList.length > 0) {
                var _findProjectList = _slicedToArray(findProjectList, 1);

                initProject = _findProjectList[0];
            } else {
                console.log("this.props.router", this.props.router);
            }
            return initProject;
        }
    }, {
        key: 'changeProjectBanner',
        value: function changeProjectBanner(projectIndex) {
            var currentProject = this.props.projects[projectIndex];
            if (window.innerWidth < 768) window.scrollTo(0, 0); // eslint-disable-line
            this.setState({ currentProject: currentProject });
        }
    }, {
        key: 'toggleHover',
        value: function toggleHover(i) {
            var bannerLinks = this.state.bannerLinks[i];

            if (bannerLinks) bannerLinks = !bannerLinks;else bannerLinks = true;
            this.setState({ bannerLinks: bannerLinks });
        }
    }, {
        key: 'render',
        value: function render() {
            var projects = this.props.projects;
            var _state = this.state,
                currentProject = _state.currentProject,
                bannerLinks = _state.bannerLinks;


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
                            _react2.default.createElement(_ProjectDetails2.default, {
                                name: currentProject.name,
                                bgImage: currentProject.bgImageUrl,
                                links: currentProject.links,
                                bannerLinks: bannerLinks,
                                onToggleHover: this.toggleHover
                            })
                        )
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'section__rightContent' },
                        _react2.default.createElement(
                            'div',
                            { className: 'section__container section__container--summary' },
                            _react2.default.createElement(_ProjectList2.default, {
                                projects: projects,
                                changeProjectBanner: this.changeProjectBanner
                            })
                        )
                    )
                )
            );
        }
    }]);

    return ProjectsPage;
}(_react2.default.Component);

ProjectsPage.defaultProps = _config.projectsMap;

exports.default = ProjectsPage;