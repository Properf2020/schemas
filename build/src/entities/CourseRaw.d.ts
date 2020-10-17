import { BaseEntity } from ".";
export declare class CourseRaw extends BaseEntity {
    course?: string;
    distance?: string;
    sexeNageur?: string;
    nom?: string;
    prenom?: string;
    club?: string;
    tailleBassin?: string;
    temps?: string;
    date?: string;
    ville?: string;
    dateNaissance?: string;
    userID?: string;
    age?: number;
    tempsPassages?: Map<String, String>;
    niveauCompetition?: string;
}
