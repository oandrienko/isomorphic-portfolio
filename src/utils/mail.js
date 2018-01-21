import nodemailer from 'nodemailer';
import template from './template';
import template_raw from './template_raw';

export default function sendAdminNotification(message, callback) {

    const mailClient = {
        service: process.env.ANDRIENKOCA_MAIL_SERVICE,
        user: process.env.ANDRIENKOCA_MAIL_USER,
        pass: process.env.ANDRIENKOCA_MAIL_PASS
    };

    //the two template string exports
    const text = template_raw(message);
    const html = template(message);

    const transporter = nodemailer.createTransport('SMTP', {
        service: mailClient.service,
        auth: {
            user: mailClient.user,
            pass: mailClient.pass
        }
    });

    const mailOptions = {
        from: mailClient.user,
        to: 'andrienko@live.ca',
        subject: '✔ Andrienko.ca Contact Form',
        text,
        html
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (typeof callback === 'function') callback(error || info);
    });

}
