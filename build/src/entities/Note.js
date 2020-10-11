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
exports.Note = void 0;
const mongodb_1 = require("@mikro-orm/mongodb");
const mikro_orm_1 = require("mikro-orm");
let Note = class Note {
};
__decorate([
    mikro_orm_1.PrimaryKey(),
    __metadata("design:type", mongodb_1.ObjectId)
], Note.prototype, "_id", void 0);
__decorate([
    mikro_orm_1.SerializedPrimaryKey(),
    __metadata("design:type", String)
], Note.prototype, "id", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", Number)
], Note.prototype, "france", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", Number)
], Note.prototype, "departement", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", Number)
], Note.prototype, "region", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", Number)
], Note.prototype, "club", void 0);
Note = __decorate([
    mikro_orm_1.Entity()
], Note);
exports.Note = Note;
