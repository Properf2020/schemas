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
exports.StatsDepartment = void 0;
const enums_1 = require("../enums");
const core_1 = require("@mikro-orm/core");
const _1 = require(".");
const objects_1 = require("../objects");
const repositories_1 = require("../repositories");
let StatsDepartment = class StatsDepartment extends _1.BaseStats {
    constructor(departement, course) {
        super(course);
        this.departement = departement;
    }
};
__decorate([
    core_1.Enum(),
    __metadata("design:type", String)
], StatsDepartment.prototype, "departement", void 0);
StatsDepartment = __decorate([
    core_1.Entity({ customRepository: () => repositories_1.StatsDepartmentRepository }),
    __metadata("design:paramtypes", [String, objects_1.CourseInfo])
], StatsDepartment);
exports.StatsDepartment = StatsDepartment;
