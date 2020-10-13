import { BaseEntity, User } from "../entities";
import { ERole } from "../enums";
export declare class ClubRole extends BaseEntity {
    user: User;
    roles: Array<ERole>;
    constructor(user: User);
}
