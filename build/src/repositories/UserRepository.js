"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const core_1 = require("@mikro-orm/core");
class UserRepository extends core_1.EntityRepository {
    validatePassword(password, user) {
        return false;
    }
}
exports.UserRepository = UserRepository;
