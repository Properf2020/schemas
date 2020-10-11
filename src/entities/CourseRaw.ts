import { Entity, Property } from "mikro-orm";
import { BaseEntity } from ".";

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
    classementDep?: string;

    @Property()
    classementReg?: string;

    @Property()
    classementNat?: string;

    @Property()
    city?: string;
}