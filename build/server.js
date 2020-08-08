"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const app_1 = require("./app");
const routes_1 = require("./routes");
const app = new app_1.default(routes_1.default, config_1.APP_CONFIG.PORT);
app.listen();
//# sourceMappingURL=server.js.map