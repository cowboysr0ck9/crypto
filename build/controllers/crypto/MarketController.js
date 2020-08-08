"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express = require("express");
const services_1 = require("../../services");
const services_2 = require("../../services");
const messages_1 = require("./messages");
const omc = new services_1.OpenMarketCapService();
const cmc = new services_2.CoinMarketCapService();
class MarketController {
    constructor() {
        this.path = '/market';
        this.router = express.Router();
        this.omc = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield omc.getTopTenTokens(10);
                res.status(200).json({ success: true, data });
            }
            catch (error) {
                res.status(400).json({ success: false, msg: messages_1.OMC_FAILURE_MSG });
            }
        });
        this.cmc = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield cmc.getTopTenTokens(10, 'USD');
                res.status(200).json({ success: true, data });
            }
            catch (error) {
                res.status(400).json({ success: false, msg: messages_1.OMC_FAILURE_MSG });
            }
        });
        this.intializeRoutes();
    }
    intializeRoutes() {
        const { path, router, omc, cmc } = this;
        router.get(`${path}/omc`, omc);
        router.get(`${path}/cmc`, cmc);
    }
}
exports.default = MarketController;
//# sourceMappingURL=MarketController.js.map