import { ERegion } from "../enums";
import { BaseStats } from ".";
import { CourseInfo } from "../objects";
export declare class StatsRegion extends BaseStats {
    region: ERegion;
    constructor(region: ERegion, course: CourseInfo);
}
