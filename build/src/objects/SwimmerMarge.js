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
exports.SwimmerMarge = void 0;
const core_1 = require("@mikro-orm/core");
const entities_1 = require("../entities");
const enums_1 = require("../enums");
const enums_2 = require("../enums");
const enums_3 = require("../enums");
class SwimmerMarge {
    constructor(marge, swimmer, distance, type, season) {
        this.distance = distance;
        this.marge = marge;
        this.season = season;
        this.type = type;
        this.swimmer = swimmer;
    }
}
__decorate([
    core_1.Property(),
    __metadata("design:type", Number)
], SwimmerMarge.prototype, "marge", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", entities_1.Swimmer)
], SwimmerMarge.prototype, "swimmer", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", String)
], SwimmerMarge.prototype, "distance", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", String)
], SwimmerMarge.prototype, "type", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Number)
], SwimmerMarge.prototype, "season", void 0);
exports.SwimmerMarge = SwimmerMarge;
