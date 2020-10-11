import { ObjectId } from "@mikro-orm/mongodb";
import { Entity, Enum, ManyToOne, PrimaryKey, Property, SerializedPrimaryKey } from "mikro-orm";
import { BaseEntity, Swimmer, Club, SwimmerNote } from ".";
import { ESeason, ESwimmerCategory, EBassin } from "../enums";
import { CourseFormatedRepository } from "../repositories/CourseFormatedRepository";

@Entity({ customRepository: () => CourseFormatedRepository })
export class CourseFormated extends BaseEntity {

    @PrimaryKey()
    _id!: ObjectId;

    @SerializedPrimaryKey()
    id!: string;

    @Property()
    time: String;

    @Property()
    swimmer: Swimmer;

    @Property()
    club: Club;

    @Property()
    date: Date;

    @Property()
    swimmerAge: number;

    @Enum()
    season: ESeason;

    @Enum()
    swimmerCagegory: ESwimmerCategory;

    @Enum()
    bassin: EBassin;

    @Property({ type: SwimmerNote })
    notes;

    constructor(time: String, swimmer: Swimmer, club: Club, date: Date, swimmerAge: number, season: ESeason, swimmerCategory: ESwimmerCategory, bassin: EBassin, notes: SwimmerNote) {
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
    }
}