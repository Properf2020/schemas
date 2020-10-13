import { Swimmer } from "../entities";
import { ESeason } from "../enums";
import { ECourseDistance } from "../enums";
import { ECourseType } from "../enums";
import { CourseFormated } from "../entities";
export declare class SwimmerRecord {
    swimmer: Swimmer;
    distance: ECourseDistance;
    type: ECourseType;
    season: ESeason;
    course: CourseFormated;
    constructor(course: CourseFormated, swimmer: Swimmer, distance: ECourseDistance, type: ECourseType, season: ESeason);
}
