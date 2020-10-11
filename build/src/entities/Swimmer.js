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
exports.Swimmer = void 0;
const mongodb_1 = require("@mikro-orm/mongodb");
const mikro_orm_1 = require("mikro-orm");
const _1 = require(".");
const SwimmerRepository_1 = require("../repositories/SwimmerRepository");
let Swimmer = class Swimmer extends _1.BaseEntity {
    constructor(firstName, lastName, birthDate, seniority, club) {
        super();
        this.user = null;
        this.records = new _1.SwimmerRecord();
        this.marges = new _1.SwimmerMarge();
        this.notes = new _1.SwimmerNote();
        this.courses = new mikro_orm_1.Collection(this);
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.seniority = seniority;
        this.club = club;
    }
};
__decorate([
    mikro_orm_1.PrimaryKey(),
    __metadata("design:type", mongodb_1.ObjectId)
], Swimmer.prototype, "_id", void 0);
__decorate([
    mikro_orm_1.SerializedPrimaryKey(),
    __metadata("design:type", String)
], Swimmer.prototype, "id", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], Swimmer.prototype, "firstName", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], Swimmer.prototype, "lastName", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", Date)
], Swimmer.prototype, "birthDate", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", Number)
], Swimmer.prototype, "seniority", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", Object)
], Swimmer.prototype, "user", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", _1.Group)
], Swimmer.prototype, "group", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", _1.Club)
], Swimmer.prototype, "club", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", Object)
], Swimmer.prototype, "records", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", Object)
], Swimmer.prototype, "marges", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", Object)
], Swimmer.prototype, "notes", void 0);
__decorate([
    mikro_orm_1.OneToMany(() => _1.CourseFormated, course => course.swimmer),
    __metadata("design:type", Object)
], Swimmer.prototype, "courses", void 0);
Swimmer = __decorate([
    mikro_orm_1.Entity({ customRepository: () => SwimmerRepository_1.SwimmerRepository }),
    __metadata("design:paramtypes", [String, String, Date, Number, _1.Club])
], Swimmer);
exports.Swimmer = Swimmer;
