import { BaseEntity, Club, Swimmer } from ".";
import { EBassin, ESeason, ESwimmerCategory, ENiveauCompetition } from "../enums";
import { ECourseDistance } from "../enums/ECourseDistance";
import { ECourseType } from "../enums/ECourseType";
import { Note } from "../objects";
export declare class CourseFormated extends BaseEntity {
    time: number;
    swimmer: Swimmer;
    club: Club;
    date: Date;
    swimmerAge: number;
    record?: typeof Swimmer | undefined;
    season: ESeason;
    swimmerCagegory: ESwimmerCategory;
    bassin: EBassin;
    type: ECourseType;
    distance: ECourseDistance;
    notes?: Note;
    tempsPassages?: Map<String, String>;
    niveauCompetition: ENiveauCompetition;
    constructor(time: number, swimmer: Swimmer, club: Club, date: Date, swimmerAge: number, season: ESeason, swimmerCategory: ESwimmerCategory, bassin: EBassin, type: ECourseType, distance: ECourseDistance, niveauCompetition: ENiveauCompetition);
}
