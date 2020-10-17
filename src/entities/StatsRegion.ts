import { ERegion } from "../enums";
import { Entity, Enum, Property } from "@mikro-orm/core";
import { BaseStats } from ".";
import { CourseInfo, Note } from "../objects";
import { StatsRegionRepository } from "../repositories";

@Entity({ customRepository: () => StatsRegionRepository })
export class StatsRegion extends BaseStats {

    @Enum()
    region: ERegion;

    constructor(region: ERegion, course: CourseInfo) {
        super(course);
        this.region = region;
    }
}