"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
const messages_1 = require("./messages");
const JWT_SECRET = String(process.env.JWT_SECRET);
class RegisterController {
    constructor() {
        this.routepath = '/register';
        this.router = express.Router();
        this.register = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const data = jwt.sign(Object.assign({}, req.body), JWT_SECRET);
                res.status(200).json({ success: true, data });
            }
            catch (error) {
                res.status(400).json({ success: false, msg: messages_1.REGISTRATION_FAILED_MSG });
            }
        });
        this.verify = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const data = jwt.verify(req.body.token, JWT_SECRET);
                res.status(200).json({ success: true, data });
            }
            catch (error) {
                res.status(400).json({ success: false, msg: messages_1.JWT_FAILED_MSG });
            }
        });
        this.logs = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const log = path.join('./errors.log');
                res.status(200).download(log);
            }
            catch (error) {
                res.status(400).json({ success: false, msg: messages_1.LOGS_FAILED_MSG });
            }
        });
        const { routepath, router, register, verify, logs } = this;
        router.post(`${routepath}`, register);
        router.post(`${routepath}/verify`, verify);
        router.get(`${routepath}/logs`, logs);
    }
}
exports.default = RegisterController;
//# sourceMappingURL=RegisterController.js.map