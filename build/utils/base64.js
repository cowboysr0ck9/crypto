"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64Encode = (data) => Buffer.from(data).toString('base64');
exports.base64Decode = (data) => Buffer.from(data, 'base64').toString('ascii');
//# sourceMappingURL=base64.js.map