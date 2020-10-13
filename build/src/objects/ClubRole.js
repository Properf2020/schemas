"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClubRole = void 0;
const core_1 = require("@mikro-orm/core");
const entities_1 = require("../entities");
let ClubRole = class ClubRole extends entities_1.BaseEntity {
    constructor(user) {
        super();
        this.roles = [];
        this.user = user;
    }
};
__decorate([
    core_1.Property(),
    __metadata("design:type", entities_1.User)
], ClubRole.prototype, "user", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Array)
], ClubRole.prototype, "roles", void 0);
ClubRole = __decorate([
    core_1.Entity(),
    __metadata("design:paramtypes", [entities_1.User])
], ClubRole);
exports.ClubRole = ClubRole;