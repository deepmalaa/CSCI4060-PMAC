const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service:'gmail',
    secure: false,
    port: 587,
    auth: {
        user: 'ulm.pmac.email@gmail.com',
        pass: 'thhdzpvqemggeovc'
    }
});

module.exports = transporter;