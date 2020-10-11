import { ObjectId } from "@mikro-orm/mongodb";
import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from "mikro-orm";
import { BaseStats, Note } from ".";
import { StatsClubRepository } from "../repositories/StatsClubRepository";

@Entity({ customRepository: () => StatsClubRepository })
export class StatsClub extends BaseStats {

    @PrimaryKey()
    _id!: ObjectId;

    @SerializedPrimaryKey()
    id!: string;

    @Property({ type: Note })
    performance: Note;

    constructor(performance: Note) {
        super(performance);
        this.performance = performance;
    }

}