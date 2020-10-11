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
exports.Bill = void 0;
const core_1 = require("@mikro-orm/core");
const mikro_orm_1 = require("mikro-orm");
const _1 = require(".");
const enums_1 = require("../enums");
const BillRepository_1 = require("../repositories/BillRepository");
let Bill = class Bill extends _1.BaseEntity {
    constructor(from, to, price, club, paymentStatus) {
        super();
        this.from = from;
        this.to = to;
        this.price = price;
        this.club = club;
        this.paymentStatus = paymentStatus;
    }
};
__decorate([
    core_1.Property(),
    __metadata("design:type", _1.Club)
], Bill.prototype, "club", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Date)
], Bill.prototype, "from", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Date)
], Bill.prototype, "to", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Number)
], Bill.prototype, "price", void 0);
__decorate([
    mikro_orm_1.Enum(),
    __metadata("design:type", String)
], Bill.prototype, "paymentStatus", void 0);
Bill = __decorate([
    core_1.Entity({ customRepository: () => BillRepository_1.BillRepository }),
    __metadata("design:paramtypes", [Date, Date, Number, _1.Club, String])
], Bill);
exports.Bill = Bill;
