"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = template_raw;
function template_raw(data) {
    return "\n        Hey Oles,\n\n        Someone submitted a message from the contact form on your website at \"Andrienko.co\".\n\n        Here's what was submitted:\n\n        Message: " + data + "\n\n        Your welcome Oles. \n\n        From Oles Bot :)\n    ";
}