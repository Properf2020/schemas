import { Entity, Property } from "@mikro-orm/core";
import { BaseStats } from ".";
import { Note } from "../objects";
import { StatsCountryRepository } from "../repositories";

@Entity({ customRepository: () => StatsCountryRepository })
export class StatsCountry extends BaseStats {

    @Property()
    performance: Note;

    constructor(performance: Note) {
        super(performance);
        this.performance = performance;
    }

}