import { ObjectId } from "@mikro-orm/mongodb";
import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from "mikro-orm";
import { BaseStats, Note } from ".";
import { StatsRegionRepository } from "../repositories/StatsRegionRepository";

@Entity({ customRepository: () => StatsRegionRepository })
export class StatsRegion extends BaseStats {

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