import { Collection } from '@mikro-orm/core';
import { BaseEntity, Swimmer } from '.';
import { ERole } from '../enums';
import { ClubRole, UserPreference } from '../objects';
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
