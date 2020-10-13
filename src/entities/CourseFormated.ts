import { Entity, Enum, ManyToOne, Property } from "@mikro-orm/core";
import { BaseEntity, Club, Swimmer } from ".";
import { EBassin, ESeason, ESwimmerCategory } from "../enums";
import { ECourseDistance } from "../enums/ECourseDistance";
import { ECourseType } from "../enums/ECourseType";
import { Note } from "../objects";
import { CourseFormatedRepository } from "../repositories";

@Entity({ customRepository: () => CourseFormatedRepository })
export class CourseFormated extends BaseEntity {

    @Property()
    time: String;

    @ManyToOne()
    swimmer: Swimmer;

    @ManyToOne()
    club: Club;

    @Property()
    date: Date;

    @Property()
    swimmerAge: number;

    @Property()
    record?= Swimmer;

    @Enum()
    season: ESeason;

    @Enum()
    swimmerCagegory: ESwimmerCategory;

    @Enum()
    bassin: EBassin;

    @Enum()
    type: ECourseType

    @Enum()
    distance: ECourseDistance;

    @Property()
    notes: Note;

    constructor(time: String, swimmer: Swimmer, club: Club, date: Date, swimmerAge: number, season: ESeason, swimmerCategory: ESwimmerCategory, bassin: EBassin, notes: Note, type: ECourseType, distance: ECourseDistance) {
        super();
        this.club = club;
        this.bassin = bassin;
        this.time = time;
        this.swimmer = swimmer;
        this.date = date;
        this.season = season;
        this.swimmerAge = swimmerAge;
        this.swimmerCagegory = swimmerCategory;
        this.notes = notes;
        this.type = type;
        this.distance = distance;
    }
}