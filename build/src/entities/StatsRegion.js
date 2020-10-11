"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsRegion = void 0;
const mikro_orm_1 = require("mikro-orm");
const _1 = require(".");
const StatsRegionRepository_1 = require("../repositories/StatsRegionRepository");
let StatsRegion = class StatsRegion extends _1.BaseStats {
};
StatsRegion = __decorate([
    mikro_orm_1.Entity({ customRepository: () => StatsRegionRepository_1.StatsRegionRepository })
], StatsRegion);
exports.StatsRegion = StatsRegion;
