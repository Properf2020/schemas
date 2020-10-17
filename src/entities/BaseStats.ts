import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from ".";
import { CourseInfo, Note, StatByAge, StatByNote, StatsByCategory } from "../objects";

@Entity()
export abstract class BaseStats extends BaseEntity {

    @Property()
    course: CourseInfo;

    @Property()
    statsByNote: StatByNote[] = [];

    @Property()
    statsByAge: StatByAge[] = [];

    @Property()
    statsByCategory: StatsByCategory[] = [];

    constructor(course: CourseInfo) {
        super();
        this.course = course;
    }
}