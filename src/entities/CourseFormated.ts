import { Entity, Enum, ManyToOne, Property } from "@mikro-orm/core";
import { BaseEntity, Club, Swimmer } from ".";
import { EBassin, ESeason, ESwimmerCategory, ENiveauCompetition } from "../enums";
import { ECourseDistance } from "../enums/ECourseDistance";
import { ECourseType } from "../enums/ECourseType";
import { Note } from "../objects";
import { CourseFormatedRepository } from "../repositories";

@Entity({ customRepository: () => CourseFormatedRepository })
export class CourseFormated extends BaseEntity {

    @Property()
    time: number;

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
    notes?: Note;

    @Property()
    tempsPassages?: Map<String, String>;

    @Enum()
    niveauCompetition: ENiveauCompetition;

    constructor(time: number, swimmer: Swimmer, club: Club, date: Date, swimmerAge: number, season: ESeason, swimmerCategory: ESwimmerCategory, bassin: EBassin, type: ECourseType, distance: ECourseDistance, niveauCompetition: ENiveauCompetition) {
        super();
        this.club = club;
        this.bassin = bassin;
        this.time = time;
        this.swimmer = swimmer;
        this.date = date;
        this.season = season;
        this.swimmerAge = swimmerAge;
        this.swimmerCagegory = swimmerCategory;
        this.type = type;
        this.distance = distance;
        this.niveauCompetition = niveauCompetition;
    }
}