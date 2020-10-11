import { ObjectId } from "@mikro-orm/mongodb";
import { User } from ".";
import { ERole } from "../enums";
export declare class ClubRole {
    _id: ObjectId;
    id: string;
    user: User;
    roles: Array<ERole>;
    constructor(user: User);
}
