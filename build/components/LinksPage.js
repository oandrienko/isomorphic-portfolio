"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinksPage = function LinksPage() {
    return _react2.default.createElement(
        "div",
        { className: "mainContent__links", role: "main" },
        _react2.default.createElement(
            "div",
            { className: "mainContent__linksContainer" },
            _react2.default.createElement(
                "section",
                { className: "links__content" },
                _react2.default.createElement(
                    "div",
                    { className: "links__content--text" },
                    _react2.default.createElement(
                        "ul",
                        { className: "links__body-links" },
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "a",
                                {
                                    className: "links__link",
                                    href: "http://www.linkedin.com/in/oandrienko",
                                    target: "_blank"
                                },
                                _react2.default.createElement("img", { src: "/images/links/linkedin_icon.jpg", alt: "Oles Andrienko LinkedIn Profile" })
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "a",
                                {
                                    className: "links__link",
                                    href: "http://github.com/oandrienko",
                                    target: "_blank"
                                },
                                _react2.default.createElement("img", { src: "/images/links/github_icon.jpg", alt: "Oles Andrienko Github Profile" })
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "a",
                                {
                                    className: "links__link",
                                    href: "mailto:oandrien@uwaterloo.ca"
                                },
                                _react2.default.createElement("img", { src: "/images/links/mail_icon.jpg", alt: "Oles Andrienko University of Waterloo Email" })
                            )
                        )
                    )
                )
            )
        )
    );
};

exports.default = LinksPage;