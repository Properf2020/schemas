import { EBassin, ECourseDistance, ECourseType } from "../enums";
export declare class CourseInfo {
    raceType: ECourseType;
    raceDistance: ECourseDistance;
    raceBassin: EBassin;
    constructor(raceType: ECourseType, raceDistance: ECourseDistance, raceBassin: EBassin);
}
