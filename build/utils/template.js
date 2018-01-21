"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = template;
function template(data) {
    return "\n        <p>Hey Oles,</p>\n\n        <p>Someone submitted a message from the contact form on your website at \"Andrienko.co\".</p>\n\n        <p>Here's what was submitted:</p>\n\n        <ul style=\"paddding-left: 30px;\">\n\n            <li>Message: <b>" + data + "</b></li>\n\n        </ul>\n\n        <p>Your welcome Oles.</p>\n\n        <p>From Oles Bot :)</p>\n    ";
}