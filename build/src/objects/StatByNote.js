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
exports.StatByNote = void 0;
const core_1 = require("@mikro-orm/core");
class StatByNote {
}
__decorate([
    core_1.Property(),
    __metadata("design:type", Number)
], StatByNote.prototype, "note", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Number)
], StatByNote.prototype, "moyennePerf", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Number)
], StatByNote.prototype, "maxPerf", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Number)
], StatByNote.prototype, "minPerf", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Number)
], StatByNote.prototype, "variancePerf", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Number)
], StatByNote.prototype, "moyenneMarges", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Number)
], StatByNote.prototype, "maxMarges", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Number)
], StatByNote.prototype, "minMarges", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Number)
], StatByNote.prototype, "varianceMarges", void 0);
exports.StatByNote = StatByNote;