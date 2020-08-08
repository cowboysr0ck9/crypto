"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
exports.APP_CONFIG = {
    COIN_MARKET_CAP_KEY: process.env.COIN_MARKET_CAP_KEY,
    PORT: Number(process.env.PORT)
};
//# sourceMappingURL=config.js.map