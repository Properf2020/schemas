import { Collection } from '@mikro-orm/core';
import { BaseEntity, Club, CourseFormated, Group } from '.';
import { Note, SwimmerMarge } from '../objects';
export declare class Swimmer extends BaseEntity {
    firstName: string;
    lastName: string;
    birthDate: Date;
    seniority?: number;
    sex: string;
    idFFn?: string;
    user: null;
    group?: Group;
    clubs: Collection<Club, unknown>;
    marges?: SwimmerMarge;
    notes?: Note;
    courses: Collection<CourseFormated, unknown>;
    records: Collection<CourseFormated, unknown>;
    constructor(firstName: string, lastName: string, birthDate: Date, sex: string);
}
