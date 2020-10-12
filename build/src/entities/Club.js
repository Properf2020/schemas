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
exports.Club = void 0;
const core_1 = require("@mikro-orm/core");
const mongodb_1 = require("@mikro-orm/mongodb");
const mikro_orm_1 = require("mikro-orm");
const _1 = require(".");
const enums_1 = require("../enums");
const ClubRepository_1 = require("../repositories/ClubRepository");
let Club = class Club extends _1.BaseEntity {
    constructor(name) {
        super();
        this.users = new core_1.Collection(this);
        this.swimmers = new core_1.Collection(this);
        this.name = name;
    }
};
__decorate([
    core_1.PrimaryKey(),
    __metadata("design:type", mongodb_1.ObjectId)
], Club.prototype, "_id", void 0);
__decorate([
    core_1.SerializedPrimaryKey(),
    __metadata("design:type", String)
], Club.prototype, "id", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", String)
], Club.prototype, "name", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", number)
], Club.prototype, "idFfn", void 0);
__decorate([
    mikro_orm_1.ManyToMany(() => _1.ClubRole),
    __metadata("design:type", Object)
], Club.prototype, "users", void 0);
__decorate([
    mikro_orm_1.ManyToMany(() => _1.Swimmer),
    __metadata("design:type", Object)
], Club.prototype, "swimmers", void 0);
__decorate([
    mikro_orm_1.Enum(),
    __metadata("design:type", String)
], Club.prototype, "plan", void 0);
Club = __decorate([
    core_1.Entity({ customRepository: () => ClubRepository_1.ClubRepository }),
    __metadata("design:paramtypes", [String])
], Club);
exports.Club = Club;
