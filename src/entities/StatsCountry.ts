import { ObjectId } from "@mikro-orm/mongodb";
import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from "mikro-orm";
import { BaseStats, Note } from ".";
import { StatsCountryRepository } from "../repositories/StatsCountryRepository";

@Entity({ customRepository: () => StatsCountryRepository })
export class StatsCountry extends BaseStats {

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