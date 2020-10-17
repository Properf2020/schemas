import { Swimmer } from "../entities";
import { EBassin, ESeason } from "../enums";
import { ECourseDistance } from "../enums";
import { ECourseType } from "../enums";
import { BaseEntity, CourseFormated } from "../entities";
import { Entity, Enum, ManyToMany, ManyToOne, OneToMany, Property } from "@mikro-orm/core";

@Entity()
export class SwimmerRecord extends BaseEntity {
    @ManyToOne()
    swimmer: Swimmer;

    @Enum()
    distance: ECourseDistance;

    @Enum()
    type: ECourseType;

    @Enum()
    season: ESeason;

    @Enum()
    bassin: EBassin;

    @ManyToOne()
    course: CourseFormated;

    constructor(course: CourseFormated, swimmer: Swimmer, distance: ECourseDistance, type: ECourseType, season: ESeason, bassin: EBassin) {
        super();
        this.distance = distance;
        this.course = course;
        this.season = season;
        this.type = type;
        this.swimmer = swimmer;
        this.bassin = bassin;
    }
}