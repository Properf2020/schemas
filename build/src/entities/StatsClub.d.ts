import { BaseStats } from ".";
import { CourseInfo } from "../objects";
import { Club } from "./Club";
export declare class StatsClub extends BaseStats {
    club: Club;
    constructor(club: Club, course: CourseInfo);
}
