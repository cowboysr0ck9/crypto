"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const openMarketCap_1 = require("../instances/openMarketCap");
class OpenMarketCapService {
    getAllTokens() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const tokens = yield openMarketCap_1.default.get(`/tokens`);
                return tokens.data;
            }
            catch (error) {
                throw new Error(`Sorry we could not retrieve all tokens.`);
            }
        });
    }
    getTopTenTokens(range) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const tokens = yield openMarketCap_1.default.get(`/tokens?size=${range}`);
                return tokens.data;
            }
            catch (error) {
                throw new Error(`Sorry we could not retrieve all ${range} tokens`);
            }
        });
    }
}
exports.OpenMarketCapService = OpenMarketCapService;
//# sourceMappingURL=api.js.map