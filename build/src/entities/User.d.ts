import { Collection } from '@mikro-orm/core';
import { BaseEntity, ClubRole, Swimmer, UserPreference } from '.';
import { ERole } from '../enums';
export declare class User extends BaseEntity {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    swimmer?: Swimmer;
    role: ERole;
    preference: UserPreference;
    clubs: Collection<ClubRole, unknown>;
    constructor(firstName: string, lastName: string, email: string, password: string, phoneNumber: string);
}
