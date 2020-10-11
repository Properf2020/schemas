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
exports.CourseRaw = void 0;
const mongodb_1 = require("@mikro-orm/mongodb");
const mikro_orm_1 = require("mikro-orm");
const _1 = require(".");
let CourseRaw = class CourseRaw extends _1.BaseEntity {
};
__decorate([
    mikro_orm_1.PrimaryKey(),
    __metadata("design:type", mongodb_1.ObjectId)
], CourseRaw.prototype, "_id", void 0);
__decorate([
    mikro_orm_1.SerializedPrimaryKey(),
    __metadata("design:type", String)
], CourseRaw.prototype, "id", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], CourseRaw.prototype, "course", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], CourseRaw.prototype, "distance", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], CourseRaw.prototype, "sexeNageur", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], CourseRaw.prototype, "nom", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], CourseRaw.prototype, "prenom", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], CourseRaw.prototype, "saison", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], CourseRaw.prototype, "club", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], CourseRaw.prototype, "tailleBassin", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], CourseRaw.prototype, "temps", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], CourseRaw.prototype, "date", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], CourseRaw.prototype, "ville", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], CourseRaw.prototype, "dateNaissance", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], CourseRaw.prototype, "departement", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], CourseRaw.prototype, "region", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], CourseRaw.prototype, "userID", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], CourseRaw.prototype, "clubID", void 0);
CourseRaw = __decorate([
    mikro_orm_1.Entity(),
    mikro_orm_1.Unique({ properties: ['userID', 'date', 'distance', 'course'] })
], CourseRaw);
exports.CourseRaw = CourseRaw;
