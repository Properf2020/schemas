import { Collection } from '@mikro-orm/core';
import { BaseEntity, Club, CourseFormated, Group } from '.';
import { Note, SwimmerMarge, SwimmerRecord } from '../objects';
export declare class Swimmer extends BaseEntity {
    firstName: string;
    lastName: string;
    birthDate: Date;
    seniority?: number;
    sex: string;
    idFfn?: string;
    user: null;
    group?: Group;
    clubs: Collection<Club, unknown>;
    marges: Collection<SwimmerMarge, unknown>;
    notes?: Note;
    courses: Collection<CourseFormated, unknown>;
    records: Collection<SwimmerRecord, unknown>;
    constructor(firstName: string, lastName: string, birthDate: Date, sex: string);
}
