import { Entity, Property } from "@mikro-orm/core";
import { BaseStats } from ".";
import { Note } from "../objects";
import { StatsRegionRepository } from "../repositories";

@Entity({ customRepository: () => StatsRegionRepository })
export class StatsRegion extends BaseStats {

    @Property()
    performance: Note;

    constructor(performance: Note) {
        super(performance);
        this.performance = performance;
    }
}