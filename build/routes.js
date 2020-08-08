"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginController_1 = require("./controllers/auth/LoginController");
const RegisterController_1 = require("./controllers/auth/RegisterController");
const MarketController_1 = require("./controllers/crypto/MarketController");
const TaxUploaderController_1 = require("./controllers/tax-upload/TaxUploaderController");
const ROUTES = [new LoginController_1.default(), new RegisterController_1.default(), new MarketController_1.default(), new TaxUploaderController_1.default()];
exports.default = ROUTES;
//# sourceMappingURL=routes.js.map