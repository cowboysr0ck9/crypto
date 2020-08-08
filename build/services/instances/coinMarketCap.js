"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const config_1 = require("../../config/config");
const coinMarketCap = axios_1.default.create({
    baseURL: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings',
    headers: {
        'X-CMC_PRO_API_KEY': config_1.APP_CONFIG.COIN_MARKET_CAP_KEY
    }
});
exports.default = coinMarketCap;
//# sourceMappingURL=coinMarketCap.js.map