import { ArrayType, Cascade, Collection, Entity, ManyToMany, ManyToOne, OneToMany, Property } from '@mikro-orm/core';
import { BaseEntity, Club, CourseFormated, Group } from '.';
import { Note, SwimmerMarge, SwimmerRecord } from '../objects';
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

    @OneToMany(() => SwimmerMarge, marge => marge.swimmer, { cascade: [Cascade.ALL] })
    marges: Collection<SwimmerMarge>;

    @Property()
    notes?: Note;

    @OneToMany(() => CourseFormated, course => course.swimmer)
    courses = new Collection<CourseFormated>(this);

    @OneToMany(() => SwimmerRecord, record => record.swimmer, { cascade: [Cascade.ALL], eager: true })
    records: Collection<SwimmerRecord>;

    constructor(firstName: string, lastName: string, birthDate: Date, sex: string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.sex = sex;
        this.records = new Collection<SwimmerRecord>(this);
        this.marges = new Collection<SwimmerMarge>(this);
    }
}