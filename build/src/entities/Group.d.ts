import { Collection } from "@mikro-orm/core";
import { BaseEntity, Swimmer, User } from ".";
export declare class Group extends BaseEntity {
    coach: User;
    swimmers: Collection<Swimmer, unknown>;
    constructor(coach: User);
}
