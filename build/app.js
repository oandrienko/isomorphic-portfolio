'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.BROWSER) {
    require('stylesRoot/base.scss');
}

// for client/browser rendering
if (process.env.BROWSER) {
    _reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _routes2.default }), document.getElementById('react-root') // eslint-disable-line
    );
}

// for server-side rendering

exports.default = function (renderProps) {
    return _react2.default.createElement(_reactRouter.RouterContext, renderProps);
};