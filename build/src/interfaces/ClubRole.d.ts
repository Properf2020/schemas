import { User } from "../entities";
import { ERole } from "../enums";
export interface ClubRole {
    user: User;
    roles: Array<ERole>;
}
