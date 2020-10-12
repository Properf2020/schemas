import { ObjectId } from '@mikro-orm/mongodb';
import { Collection, Entity, OneToMany, PrimaryKey, Property, SerializedPrimaryKey } from 'mikro-orm';
import { BaseEntity, Club, CourseFormated, Group, SwimmerMarge, SwimmerNote, SwimmerRecord, User } from '.'
import { SwimmerRepository } from '../repositories/SwimmerRepository';

@Entity({ customRepository: () => SwimmerRepository })
export class Swimmer extends BaseEntity {

    @PrimaryKey()
    _id!: ObjectId;

    @SerializedPrimaryKey()
    id!: string;

    @Property()
    firstName: string;

    @Property()
    lastName: string;

    @Property()
    birthDate: Date;

    @Property()
    seniority: number;

    @Property()
    sexe: string;

    @Property()
    user = null;

    @Property()
    group?: Group;

    @Property()
    club: Club;

    @Property()
    records = new SwimmerRecord();

    @Property()
    marges = new SwimmerMarge();

    @Property()
    notes = new SwimmerNote();

    @OneToMany(() => CourseFormated, course => course.swimmer)
    courses = new Collection<CourseFormated>(this);

    constructor(firstName: string, lastName: string, birthDate: Date, seniority: number, club: Club, sexe: string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.seniority = seniority;
        this.club = club;
        this.sexe = sexe;
    }

}
