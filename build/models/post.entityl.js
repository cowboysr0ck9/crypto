"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const audit_entity_1 = require("./audit.entity");
let Post = class Post extends audit_entity_1.default {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "content", void 0);
Post = tslib_1.__decorate([
    typeorm_1.Entity()
], Post);
exports.default = Post;
//# sourceMappingURL=post.entityl.js.map