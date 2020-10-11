import { ObjectId } from "@mikro-orm/mongodb";
import { Entity, PrimaryKey, Property, SerializedPrimaryKey, Unique } from "mikro-orm";
import { BaseEntity } from ".";

@Entity()
@Unique({ properties: ['userID', 'date', 'distance', 'course'] })
export class CourseRaw extends BaseEntity {

    @PrimaryKey()
    _id!: ObjectId;

    @SerializedPrimaryKey()
    id!: string;

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