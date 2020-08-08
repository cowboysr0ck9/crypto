"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express = require("express");
const fs_1 = require("fs");
const multer = require("multer");
const logger_1 = require("../../utils/logger");
const messages_1 = require("./messages");
class TaxUploaderController {
    constructor() {
        this.path = '/tax-uploader';
        this.router = express.Router();
        this.upload = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                fs_1.readFile(req.file.path, { encoding: 'utf8' }, (err, data) => {
                    res.status(200).json({ success: true, data: messages_1.UPLOAD_SUCCESS_MSG });
                });
            }
            catch (error) {
                const morgan = new logger_1.Logger();
                morgan.logger.log({
                    level: 'error',
                    date: new Date().toISOString(),
                    route: req.route.path,
                    method: req.method,
                    message: messages_1.UPLOAD_FAILURE_MSG,
                    body: JSON.stringify(req.body),
                });
                res.status(400).json({ success: false, msg: messages_1.UPLOAD_FAILURE_MSG });
            }
        });
        const { path, router } = this;
        const multerClient = multer({ dest: 'uploads/' });
        router.post(`${path}/upload`, multerClient.single('file'), this.upload);
    }
}
exports.default = TaxUploaderController;
//# sourceMappingURL=TaxUploaderController.js.map