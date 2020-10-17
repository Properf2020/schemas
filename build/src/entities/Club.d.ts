import { Collection } from '@mikro-orm/core';
import { BaseEntity, Bill, Swimmer } from '.';
import { EPlan } from '../enums';
import { EDepartment } from '../enums/EDepartment';
import { ERegion } from '../enums/ERegion';
import { ClubRole } from '../objects';
export declare class Club extends BaseEntity {
    name: string;
    plan: EPlan;
    idFfn: number;
    department: EDepartment;
    region: ERegion;
    users: Collection<ClubRole, unknown>;
    swimmers: Collection<Swimmer, unknown>;
    bills: Collection<Bill>;
    constructor(name: string, idFfn: number, department: EDepartment, region: ERegion);
}
