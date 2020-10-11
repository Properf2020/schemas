import { Collection } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { BaseEntity, ClubRole, Swimmer } from '.';
import { EPlan } from '../enums';
export declare class Club extends BaseEntity {
    _id: ObjectId;
    id: string;
    name: string;
    users: Collection<ClubRole, unknown>;
    swimmers: Collection<Swimmer, unknown>;
    plan?: EPlan;
    constructor(name: string);
}
