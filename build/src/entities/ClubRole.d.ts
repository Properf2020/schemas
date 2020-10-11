import { User } from ".";
import { ERole } from "../enums";
export declare class ClubRole {
    user: User;
    roles: Array<ERole>;
    constructor(user: User);
}
