import { ObjectId } from '@mikro-orm/mongodb';
import { Collection } from 'mikro-orm';
import { BaseEntity, Club, CourseFormated, Group, SwimmerMarge, SwimmerNote, SwimmerRecord } from '.';
export declare class Swimmer extends BaseEntity {
    _id: ObjectId;
    id: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    seniority: number;
    sexe: string;
    user: null;
    group?: Group;
    club: Club;
    records: SwimmerRecord;
    marges: SwimmerMarge;
    idFfn: number;
    notes: SwimmerNote;
    courses: Collection<CourseFormated, unknown>;
    constructor(firstName: string, lastName: string, birthDate: Date, seniority: number, club: Club);
}
