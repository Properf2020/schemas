import { ObjectId } from "@mikro-orm/mongodb";
import { BaseEntity } from ".";
export declare class CourseRaw extends BaseEntity {
    _id: ObjectId;
    id: string;
    course?: string;
    distance?: string;
    sexeNageur?: string;
    nom?: string;
    prenom?: string;
    saison?: string;
    club?: string;
    tailleBassin?: string;
    temps?: string;
    date?: string;
    ville?: string;
    dateNaissance?: string;
    city?: string;
}
