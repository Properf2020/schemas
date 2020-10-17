import { EDepartment } from "../enums";
import { BaseStats } from ".";
import { CourseInfo } from "../objects";
export declare class StatsDepartment extends BaseStats {
    departement: EDepartment;
    constructor(departement: EDepartment, course: CourseInfo);
}
