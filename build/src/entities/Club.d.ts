import { Collection } from '@mikro-orm/core';
import { BaseEntity, ClubRole, Swimmer, Bill } from '.';
import { EPlan } from '../enums';
export declare class Club extends BaseEntity {
    name: string;
    users: Collection<ClubRole, unknown>;
    swimmers: Collection<Swimmer, unknown>;
    plan?: EPlan;
    bills: Collection<Bill, unknown>;
    constructor(name: string);
}
