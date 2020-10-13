import { Collection } from '@mikro-orm/core';
import { BaseEntity, Bill, Swimmer } from '.';
import { EPlan } from '../enums';
import { ClubRole } from '../objects';
export declare class Club extends BaseEntity {
    name: string;
    plan: EPlan;
    idFfn: number;
    users: Collection<ClubRole, unknown>;
    swimmers: Collection<Swimmer, unknown>;
    bills: Collection<Bill>;
    constructor(name: string, idFfn: number);
}
