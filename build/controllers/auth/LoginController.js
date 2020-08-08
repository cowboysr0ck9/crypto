"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express = require("express");
const messages_1 = require("./messages");
class LoginController {
    constructor() {
        this.path = '/login';
        this.router = express.Router();
        this.login = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).json({ success: true, data: messages_1.LOGIN_SUCCESS_MSG });
            }
            catch (error) {
                res.status(400).json({ success: false, msg: messages_1.LOGIN_FAILURE_MSG });
            }
        });
        this.check = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).json({ success: true, data: messages_1.LOGIN_SUCCESS_MSG });
            }
            catch (error) {
                res.status(400).json({ success: false, msg: messages_1.LOGIN_FAILURE_MSG });
            }
        });
        const { path, router, login, check } = this;
        router.get(`${path}`, login);
        router.get(`${path}/check/:id`, check);
    }
}
exports.default = LoginController;
//# sourceMappingURL=LoginController.js.map