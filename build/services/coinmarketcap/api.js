"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const coinMarketCap_1 = require("../instances/coinMarketCap");
class CoinMarketCapService {
    getTopTenTokens(range, currency) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const coins = yield coinMarketCap_1.default.get('/latest', {
                params: {
                    start: 1,
                    limit: range,
                    convert: currency
                }
            });
            return coins.data;
        });
    }
}
exports.CoinMarketCapService = CoinMarketCapService;
//# sourceMappingURL=api.js.map