import { Swimmer } from "../entities";
import { ESeason } from "../enums";
import { ECourseDistance } from "../enums";
import { ECourseType } from "../enums";
import { BaseEntity, CourseFormated } from "../entities";
import { Entity, ManyToMany, ManyToOne, OneToMany, Property } from "@mikro-orm/core";

@Entity()
export class SwimmerRecord extends BaseEntity {
    @ManyToOne()
    swimmer: Swimmer;

    @Property()
    distance: ECourseDistance;

    @Property()
    type: ECourseType;

    @Property()
    season: ESeason;

    @ManyToOne()
    course: CourseFormated;

    constructor(course: CourseFormated, swimmer: Swimmer, distance: ECourseDistance, type: ECourseType, season: ESeason) {
        super();
        this.distance = distance;
        this.course = course;
        this.season = season;
        this.type = type;
        this.swimmer = swimmer;
    }
}