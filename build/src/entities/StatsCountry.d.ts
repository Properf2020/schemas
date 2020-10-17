import { ECountry } from "../enums";
import { BaseStats } from ".";
import { CourseInfo } from "../objects";
export declare class StatsCountry extends BaseStats {
    country: ECountry;
    constructor(country: ECountry, course: CourseInfo);
}
