import { ObjectId } from "@mikro-orm/mongodb";
import { Collection } from "mikro-orm";
import { BaseEntity, Swimmer, User } from ".";
export declare class Group extends BaseEntity {
    _id: ObjectId;
    id: string;
    swimmers: Collection<Swimmer, unknown>;
    coach: User;
    constructor(coach: User);
}
