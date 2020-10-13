import { Swimmer } from ".";
import { ESeason } from "../enums";
import { ECourseDistance } from "../enums/ECourseDistance";
import { ECourseType } from "../enums/ECourseType";
import { CourseFormated } from "./CourseFormated";
export interface SwimmerRecord {
    swimmer: Swimmer;
    distance: ECourseDistance;
    type: ECourseType;
    season: ESeason;
    course: CourseFormated;
}
