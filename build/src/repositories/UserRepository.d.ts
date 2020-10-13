import { EntityRepository } from "@mikro-orm/core";
import { User } from "../entities";
export declare class UserRepository extends EntityRepository<User> {
    validatePassword(password: string, user: User): boolean;
}
