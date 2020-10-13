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
exports.Group = void 0;
const core_1 = require("@mikro-orm/core");
const _1 = require(".");
const repositories_1 = require("../repositories");
let Group = class Group extends _1.BaseEntity {
    constructor(coach) {
        super();
        this.swimmers = new core_1.Collection(this);
        this.coach = coach;
    }
};
__decorate([
    core_1.Property({ type: _1.User }),
    __metadata("design:type", _1.User)
], Group.prototype, "coach", void 0);
__decorate([
    core_1.OneToMany(() => _1.Swimmer, swimmer => swimmer.group),
    __metadata("design:type", Object)
], Group.prototype, "swimmers", void 0);
Group = __decorate([
    core_1.Entity({ customRepository: () => repositories_1.GroupRepository }),
    __metadata("design:paramtypes", [_1.User])
], Group);
exports.Group = Group;
