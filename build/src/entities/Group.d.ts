import { Collection } from "mikro-orm";
import { BaseEntity, Swimmer, User } from ".";
export declare class Group extends BaseEntity {
    swimmers: Collection<Swimmer, unknown>;
    coach: User;
    constructor(coach: User);
}
