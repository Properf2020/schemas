import { Collection } from 'mikro-orm';
import { BaseEntity, Club, CourseFormated, Group, SwimmerMarge, SwimmerNote, SwimmerRecord, User } from '.';
export declare class Swimmer extends BaseEntity {
    firstName: string;
    lastName: string;
    birthDate: Date;
    seniority: number;
    user?: User;
    group?: Group;
    club: Club;
    records: SwimmerRecord;
    marges: SwimmerMarge;
    notes: SwimmerNote;
    courses: Collection<CourseFormated, unknown>;
    constructor(firstName: string, lastName: string, birthDate: Date, seniority: number, club: Club);
}
