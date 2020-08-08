"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const nodemailer = require("nodemailer");
function main() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let testAccount = yield nodemailer.createTestAccount();
        const mailService = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass
            }
        });
        const info = yield mailService.sendMail({
            from: '"EadsGraphic" <eadsgraphics@gmail.com>',
            to: 'tyler.eads9@gmail.com',
            subject: 'Node Mail Test',
            text: 'Hello',
            html: '<b>Hello world?</b>'
        });
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
}
exports.main = main;
main().catch(console.error);
//# sourceMappingURL=nodemailer.js.map