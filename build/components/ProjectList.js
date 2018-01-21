'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectsItem = function ProjectsItem(_ref) {
    var _ref$project = _ref.project,
        name = _ref$project.name,
        type = _ref$project.type,
        thumbnail = _ref$project.thumbnail,
        description = _ref$project.description,
        slug = _ref$project.slug,
        onClick = _ref.onClick;
    return _react2.default.createElement(
        'li',
        { className: 'project' },
        _react2.default.createElement(
            'div',
            { className: 'project__title' },
            _react2.default.createElement(
                'h4',
                null,
                name
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'project__image' },
            _react2.default.createElement('img', { src: thumbnail, alt: name })
        ),
        _react2.default.createElement(
            'div',
            { className: 'project__type' },
            type
        ),
        _react2.default.createElement(
            'div',
            { className: 'project__description' },
            description
        ),
        _react2.default.createElement(
            _reactRouter.Link,
            {
                className: 'project__button',
                to: '/projects/' + slug,
                onClick: onClick
            },
            'Read More'
        )
    );
};

var ProjetList = function ProjetList(_ref2) {
    var projects = _ref2.projects,
        changeProjectBanner = _ref2.changeProjectBanner;
    return _react2.default.createElement(
        'div',
        { className: 'section__allProjects' },
        _react2.default.createElement(
            'div',
            { className: 'allProjects__header' },
            _react2.default.createElement(
                'h3',
                null,
                'Recent Work'
            )
        ),
        _react2.default.createElement(
            'ul',
            { className: 'allProjects__projectList' },
            projects.map(function (proj, i) {
                var boundClick = changeProjectBanner.bind(null, i);
                return _react2.default.createElement(ProjectsItem, {
                    key: proj.slug,
                    project: proj,
                    onClick: boundClick
                });
            })
        )
    );
};

exports.default = ProjetList;