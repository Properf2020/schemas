import { Collection, Entity, ManyToMany, ManyToOne, OneToMany, Property } from '@mikro-orm/core';
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

    @ManyToMany(() => Club, club => club.swimmers)
    clubs = new Collection<Club>(this);

    @Property()
    marges?: SwimmerMarge;

    @Property()
    notes?: Note;

    @OneToMany(() => CourseFormated, course => course.swimmer)
    courses = new Collection<CourseFormated>(this);

    @OneToMany(() => CourseFormated, course => course.swimmer)
    records = new Collection<CourseFormated>(this);

    constructor(firstName: string, lastName: string, birthDate: Date, sex: string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.sex = sex;
    }
}