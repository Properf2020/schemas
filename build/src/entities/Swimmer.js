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
const core_1 = require("@mikro-orm/core");
const _1 = require(".");
const objects_1 = require("../objects");
const repositories_1 = require("../repositories");
let Swimmer = class Swimmer extends _1.BaseEntity {
    constructor(firstName, lastName, birthDate, sex) {
        super();
        this.user = null;
        this.clubs = new core_1.Collection(this);
        this.marges = new core_1.Collection(this);
        this.courses = new core_1.Collection(this);
        this.records = new core_1.Collection(this);
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.sex = sex;
    }
};
__decorate([
    core_1.Property(),
    __metadata("design:type", String)
], Swimmer.prototype, "firstName", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", String)
], Swimmer.prototype, "lastName", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Date)
], Swimmer.prototype, "birthDate", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Number)
], Swimmer.prototype, "seniority", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", String)
], Swimmer.prototype, "sex", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", String)
], Swimmer.prototype, "idFfn", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Object)
], Swimmer.prototype, "user", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", _1.Group)
], Swimmer.prototype, "group", void 0);
__decorate([
    core_1.ManyToMany(() => _1.Club, club => club.swimmers),
    __metadata("design:type", Object)
], Swimmer.prototype, "clubs", void 0);
__decorate([
    core_1.OneToMany(() => objects_1.SwimmerMarge, marge => marge.swimmer),
    __metadata("design:type", Object)
], Swimmer.prototype, "marges", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", objects_1.Note)
], Swimmer.prototype, "notes", void 0);
__decorate([
    core_1.OneToMany(() => _1.CourseFormated, course => course.swimmer),
    __metadata("design:type", Object)
], Swimmer.prototype, "courses", void 0);
__decorate([
    core_1.OneToMany(() => objects_1.SwimmerRecord, record => record.swimmer),
    __metadata("design:type", Object)
], Swimmer.prototype, "records", void 0);
Swimmer = __decorate([
    core_1.Entity({ customRepository: () => repositories_1.SwimmerRepository }),
    __metadata("design:paramtypes", [String, String, Date, String])
], Swimmer);
exports.Swimmer = Swimmer;
