import { BaseEntity, User } from ".";
import { ERole } from "../enums";
export declare class ClubRole extends BaseEntity {
    user: User;
    roles: Array<ERole>;
    constructor(user: User);
}
