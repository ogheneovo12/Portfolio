import nodemailer from 'nodemailer';
import APP_CONFIG from 'config/constants';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: APP_CONFIG.ENVIRONMENT.GMAIL_USER,
        pass: APP_CONFIG.ENVIRONMENT.GMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

export async function sendEmail(subject: string, emailContent: string, sender = 'ukuanovweogheneovo@gmail.com') {
    const info = await transporter.sendMail({
        from: `"Porfolio Website 👻" ${sender}`, // sender address
        to: 'ukuanovweogheneovo@gmail.com, coder4christ@gmail.com, coder4christ@yahoo.com, 180206089@live.unilag.edu.ng', // list of receivers
        subject: subject, // Subject line
        html: emailContent, // html body
    });
    return info;
}

export default transporter;
