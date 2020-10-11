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
exports.User = void 0;
const core_1 = require("@mikro-orm/core");
const mongodb_1 = require("@mikro-orm/mongodb");
const mikro_orm_1 = require("mikro-orm");
const _1 = require(".");
const enums_1 = require("../enums");
const UserRepository_1 = require("../repositories/UserRepository");
let User = class User extends _1.BaseEntity {
    constructor(firstName, lastName, email, password, phoneNumber) {
        super();
        this.role = enums_1.ERole.DEFAULT;
        this.preference = new _1.UserPreference(true, true);
        this.clubs = new core_1.Collection(this);
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
};
__decorate([
    core_1.PrimaryKey(),
    __metadata("design:type", mongodb_1.ObjectId)
], User.prototype, "_id", void 0);
__decorate([
    core_1.SerializedPrimaryKey(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", _1.Swimmer)
], User.prototype, "swimmer", void 0);
__decorate([
    mikro_orm_1.Enum(),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Object)
], User.prototype, "preference", void 0);
__decorate([
    mikro_orm_1.ManyToMany(() => _1.ClubRole),
    __metadata("design:type", Object)
], User.prototype, "clubs", void 0);
User = __decorate([
    core_1.Entity({ customRepository: () => UserRepository_1.UserRepository }),
    __metadata("design:paramtypes", [String, String, String, String, String])
], User);
exports.User = User;
