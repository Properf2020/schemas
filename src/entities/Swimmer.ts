import { Collection, Entity, OneToMany, Property } from 'mikro-orm';
import { BaseEntity, Club, CourseFormated, Group, SwimmerMarge, SwimmerNote, SwimmerRecord, User } from '.'
import { SwimmerRepository } from '../repositories/SwimmerRepository';

@Entity({ customRepository: () => SwimmerRepository})
export class Swimmer extends BaseEntity {

    @Property()
    firstName: string;

    @Property()
    lastName: string;

    @Property()
    birthDate: Date;

    @Property()
    seniority: number;

    @Property()
    user?: User;

    @Property()
    group?: Group;

    @Property()
    club: Club;

    @Property()
    records: SwimmerRecord = new SwimmerRecord();

    @Property()
    marges: SwimmerMarge = new SwimmerMarge();

    @Property()
    notes: SwimmerNote = new SwimmerNote();

    @OneToMany(() => CourseFormated, course => course.swimmer)
    courses = new Collection<CourseFormated>(this);

    constructor(firstName: string, lastName: string, birthDate: Date, seniority: number, club: Club) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.seniority = seniority;
        this.club = club;
    }

}