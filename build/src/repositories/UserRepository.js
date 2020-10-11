"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const mikro_orm_1 = require("mikro-orm");
class UserRepository extends mikro_orm_1.EntityRepository {
    validatePassword(password, user) {
        return false;
    }
}
exports.UserRepository = UserRepository;
