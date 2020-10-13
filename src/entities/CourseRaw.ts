import { Entity, Property, Unique } from "@mikro-orm/core";
import { BaseEntity } from ".";

@Unique({ properties: ['userID', 'date', 'distance', 'course'] })
@Entity()
export class CourseRaw extends BaseEntity {

    @Property()
    course?: string;

    @Property()
    distance?: string;

    @Property()
    sexeNageur?: string;

    @Property()
    nom?: string;

    @Property()
    prenom?: string;

    @Property()
    saison?: string;

    @Property()
    club?: string;

    @Property()
    tailleBassin?: string;

    @Property()
    temps?: string;

    @Property()
    date?: string;

    @Property()
    ville?: string;

    @Property()
    dateNaissance?: string;

    @Property()
    departement?: string;

    @Property()
    region?: string;

    @Property()
    userID?: string;

    @Property()
    clubID?: string;
}