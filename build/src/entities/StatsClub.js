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
exports.StatsClub = void 0;
const core_1 = require("@mikro-orm/core");
const _1 = require(".");
const objects_1 = require("../objects");
const repositories_1 = require("../repositories");
const Club_1 = require("./Club");
let StatsClub = class StatsClub extends _1.BaseStats {
    constructor(club, course) {
        super(course);
        this.club = club;
    }
};
__decorate([
    core_1.ManyToOne(),
    __metadata("design:type", Club_1.Club)
], StatsClub.prototype, "club", void 0);
StatsClub = __decorate([
    core_1.Entity({ customRepository: () => repositories_1.StatsClubRepository }),
    __metadata("design:paramtypes", [Club_1.Club, objects_1.CourseInfo])
], StatsClub);
exports.StatsClub = StatsClub;
