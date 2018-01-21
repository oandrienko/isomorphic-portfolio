"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkItem = function LinkItem(_ref) {
    var title = _ref.title,
        url = _ref.url,
        color = _ref.color,
        onHover = _ref.onHover;
    return _react2.default.createElement(
        "li",
        {
            onMouseEnter: onHover,
            onMouseLeave: onHover
        },
        _react2.default.createElement(
            "a",
            {
                className: "projectDetails__button info",
                style: { color: color, borderColor: color },
                target: "_blank",
                href: url
            },
            title
        )
    );
};

var ProjetDetails = function ProjetDetails(_ref2) {
    var name = _ref2.name,
        bgImage = _ref2.bgImage,
        links = _ref2.links,
        bannerLinks = _ref2.bannerLinks,
        onToggleHover = _ref2.onToggleHover;
    return _react2.default.createElement(
        "div",
        {
            className: "section__projectDetails",
            style: { backgroundImage: "url(" + bgImage + ")" }
        },
        _react2.default.createElement(
            "div",
            { className: "projectDetails__header" },
            _react2.default.createElement(
                "div",
                { className: "projectDetails__headerTitle" },
                _react2.default.createElement(
                    "h3",
                    null,
                    name
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "projectDetails__links" },
                    links.map(function (link, i) {
                        var onHover = onToggleHover.bind(undefined, i);
                        var hoverColor = bannerLinks[i] ? link.color : 'white';
                        return _react2.default.createElement(LinkItem, {
                            key: link.title,
                            title: link.title,
                            url: link.url,
                            color: hoverColor,
                            onHover: onHover
                        });
                    })
                )
            )
        )
    );
};

exports.default = ProjetDetails;