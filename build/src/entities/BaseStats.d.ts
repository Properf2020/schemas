import { BaseEntity } from ".";
import { CourseInfo, StatByAge, StatByNote, StatsByCategory } from "../objects";
export declare abstract class BaseStats extends BaseEntity {
    course: CourseInfo;
    statsByNote: StatByNote[];
    statsByAge: StatByAge[];
    statsByCategory: StatsByCategory[];
    constructor(course: CourseInfo);
}
