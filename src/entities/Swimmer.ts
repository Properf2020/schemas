import { Collection, Entity, ManyToOne, OneToMany, Property } from '@mikro-orm/core';
import { BaseEntity, Club, CourseFormated, Group } from '.';
import { Note, SwimmerMarge } from '../objects';
import { SwimmerRepository } from '../repositories';

@Entity({ customRepository: () => SwimmerRepository })
export class Swimmer extends BaseEntity {

    @Property()
    firstName: string;

    @Property()
    lastName: string;

    @Property()
    birthDate: Date;

    @Property()
    seniority?: number;

    @Property()
    sex: string;

    @Property()
    idFFn?: string;

    @Property()
    user = null;

    @Property()
    group?: Group;

    @ManyToOne()
    club: Club;

    @Property()
    marges?: SwimmerMarge;

    @Property()
    notes?: Note;

    @OneToMany(() => CourseFormated, course => course.swimmer)
    courses = new Collection<CourseFormated>(this);

    @OneToMany(() => CourseFormated, course => course.swimmer)
    records = new Collection<CourseFormated>(this);

    constructor(firstName: string, lastName: string, birthDate: Date, club: Club, sex: string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.club = club;
        this.sex = sex;
    }
}