"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Audit = class Audit {
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Date)
], Audit.prototype, "createdAt", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Audit.prototype, "createdBy", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Date)
], Audit.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Audit.prototype, "updatedBy", void 0);
Audit = tslib_1.__decorate([
    typeorm_1.Entity()
], Audit);
exports.default = Audit;
//# sourceMappingURL=audit.entity.js.map