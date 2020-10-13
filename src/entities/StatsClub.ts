import { Entity, Property } from "@mikro-orm/core";
import { BaseStats } from ".";
import { Note } from "../objects";
import { StatsClubRepository } from "../repositories";

@Entity({ customRepository: () => StatsClubRepository })
export class StatsClub extends BaseStats {

    @Property()
    performance: Note;

    constructor(performance: Note) {
        super(performance);
        this.performance = performance;
    }

}