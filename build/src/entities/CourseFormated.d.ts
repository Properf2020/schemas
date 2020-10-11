import { ObjectId } from "@mikro-orm/mongodb";
import { BaseEntity, Swimmer, Club, SwimmerNote } from ".";
import { ESeason, ESwimmerCategory, EBassin } from "../enums";
export declare class CourseFormated extends BaseEntity {
    _id: ObjectId;
    id: string;
    time: String;
    swimmer: Swimmer;
    club: Club;
    date: Date;
    swimmerAge: number;
    season: ESeason;
    swimmerCagegory: ESwimmerCategory;
    bassin: EBassin;
    notes: SwimmerNote;
    constructor(time: String, swimmer: Swimmer, club: Club, date: Date, swimmerAge: number, season: ESeason, swimmerCategory: ESwimmerCategory, bassin: EBassin, notes: SwimmerNote);
}
