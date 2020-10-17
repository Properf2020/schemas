import { EBassin, ECourseDistance, ECourseType } from "../enums";
import { Property } from "@mikro-orm/core";

export class CourseInfo {

    @Property()
    raceType: ECourseType;

    @Property()
    raceDistance: ECourseDistance;

    @Property()
    raceBassin: EBassin;

    constructor(raceType: ECourseType, raceDistance: ECourseDistance, raceBassin: EBassin) {
        this.raceType = raceType;
        this.raceDistance = raceDistance;
        this.raceBassin = raceBassin;
    }
}