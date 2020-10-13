import { Swimmer } from "../entities";
import { ESeason } from "../enums";
import { ECourseDistance } from "../enums";
import { ECourseType } from "../enums";
import { CourseFormated } from "../entities";
import { Entity, Property } from "@mikro-orm/core";

export class SwimmerRecord {
    @Property()
    swimmer: Swimmer;

    @Property()
    distance: ECourseDistance;

    @Property()
    type: ECourseType;

    @Property()
    season: ESeason;

    @Property()
    course: CourseFormated;

    constructor(course: CourseFormated, swimmer: Swimmer, distance: ECourseDistance, type: ECourseType, season: ESeason) {
        this.distance = distance;
        this.course = course;
        this.season = season;
        this.type = type;
        this.swimmer = swimmer;
    }
}