'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sendAdminNotification;

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _template_raw = require('./template_raw');

var _template_raw2 = _interopRequireDefault(_template_raw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendAdminNotification(message, callback) {

    var mailClient = {
        service: process.env.ANDRIENKOCA_MAIL_SERVICE,
        user: process.env.ANDRIENKOCA_MAIL_USER,
        pass: process.env.ANDRIENKOCA_MAIL_PASS
    };

    //the two template string exports
    var text = (0, _template_raw2.default)(message);
    var html = (0, _template2.default)(message);

    var transporter = _nodemailer2.default.createTransport('SMTP', {
        service: mailClient.service,
        auth: {
            user: mailClient.user,
            pass: mailClient.pass
        }
    });

    var mailOptions = {
        from: mailClient.user,
        to: 'andrienko@live.ca',
        subject: '✔ Andrienko.ca Contact Form',
        text: text,
        html: html
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (typeof callback === 'function') callback(error || info);
    });
}