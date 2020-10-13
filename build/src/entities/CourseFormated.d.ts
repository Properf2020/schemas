import { BaseEntity, Club, Swimmer } from ".";
import { EBassin, ESeason, ESwimmerCategory } from "../enums";
import { ECourseDistance } from "../enums/ECourseDistance";
import { ECourseType } from "../enums/ECourseType";
import { Note } from "../objects";
export declare class CourseFormated extends BaseEntity {
    time: String;
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
    notes: Note;
    constructor(time: String, swimmer: Swimmer, club: Club, date: Date, swimmerAge: number, season: ESeason, swimmerCategory: ESwimmerCategory, bassin: EBassin, notes: Note, type: ECourseType, distance: ECourseDistance);
}
