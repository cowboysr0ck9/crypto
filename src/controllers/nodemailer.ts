import * as nodemailer from 'nodemailer';

export async function main() {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    });

    const info = await transporter.sendMail({
        from: '"EadsGraphic" <eadsgraphics@gmail.com>', // sender address
        to: 'tyler.eads9@gmail.com', // list of receivers
        subject: 'Node Mail Test', // Subject line
        text: 'Hello', // plain text body
        html: '<b>Hello world?</b>' // html body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
