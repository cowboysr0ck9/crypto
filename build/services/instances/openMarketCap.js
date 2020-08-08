"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const openMarketCap = axios_1.default.create({
    baseURL: 'http://api.openmarketcap.com/api/v1'
});
exports.default = openMarketCap;
//# sourceMappingURL=openMarketCap.js.map