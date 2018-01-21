'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MainHeader = require('./MainHeader');

var _MainHeader2 = _interopRequireDefault(_MainHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainLayout = function MainLayout(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: 'mainWrapper' },
        _react2.default.createElement(_MainHeader2.default, null),
        children,
        _react2.default.createElement(
            'footer',
            { className: 'mainFooter' },
            _react2.default.createElement(
                'a',
                {
                    className: 'mainFooter__logoLink',
                    href: 'https://github.com/oandrienko/isomorphic-portfolio',
                    target: '_blank'
                },
                'x'
            )
        )
    );
};

exports.default = MainLayout;