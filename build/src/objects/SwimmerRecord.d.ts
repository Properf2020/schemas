import { Swimmer } from "../entities";
import { EBassin, ESeason } from "../enums";
import { ECourseDistance } from "../enums";
import { ECourseType } from "../enums";
import { BaseEntity, CourseFormated } from "../entities";
export declare class SwimmerRecord extends BaseEntity {
    swimmer: Swimmer;
    distance: ECourseDistance;
    type: ECourseType;
    season: ESeason;
    bassin: EBassin;
    course: CourseFormated;
    constructor(course: CourseFormated, swimmer: Swimmer, distance: ECourseDistance, type: ECourseType, season: ESeason, bassin: EBassin);
}
