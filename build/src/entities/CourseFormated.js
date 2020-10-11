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
exports.CourseFormated = void 0;
const mikro_orm_1 = require("mikro-orm");
const _1 = require(".");
const enums_1 = require("../enums");
const CourseFormatedRepository_1 = require("../repositories/CourseFormatedRepository");
let CourseFormated = class CourseFormated extends _1.BaseEntity {
    constructor(time, swimmer, club, date, swimmerAge, season, swimmerCategory, bassin, notes) {
        super();
        this.club = club;
        this.bassin = bassin;
        this.time = time;
        this.swimmer = swimmer;
        this.date = date;
        this.season = season;
        this.swimmerAge = swimmerAge;
        this.swimmerCagegory = swimmerCategory;
        this.notes = notes;
    }
};
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], CourseFormated.prototype, "time", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", _1.Swimmer)
], CourseFormated.prototype, "swimmer", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", _1.Club)
], CourseFormated.prototype, "club", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", Date)
], CourseFormated.prototype, "date", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", Number)
], CourseFormated.prototype, "swimmerAge", void 0);
__decorate([
    mikro_orm_1.Enum(),
    __metadata("design:type", String)
], CourseFormated.prototype, "season", void 0);
__decorate([
    mikro_orm_1.Enum(),
    __metadata("design:type", String)
], CourseFormated.prototype, "swimmerCagegory", void 0);
__decorate([
    mikro_orm_1.Enum(),
    __metadata("design:type", String)
], CourseFormated.prototype, "bassin", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", _1.SwimmerNote)
], CourseFormated.prototype, "notes", void 0);
CourseFormated = __decorate([
    mikro_orm_1.Entity({ customRepository: () => CourseFormatedRepository_1.CourseFormatedRepository }),
    __metadata("design:paramtypes", [String, _1.Swimmer, _1.Club, Date, Number, String, String, String, _1.SwimmerNote])
], CourseFormated);
exports.CourseFormated = CourseFormated;
