"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const audit_entity_1 = require("./audit.entity");
let User = class User extends audit_entity_1.default {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'bool' }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "isAdmin", void 0);
User = tslib_1.__decorate([
    typeorm_1.Entity()
], User);
exports.default = User;
//# sourceMappingURL=user.entity.js.map