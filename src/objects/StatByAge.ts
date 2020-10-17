import { EBassin, ECourseDistance, ECourseType } from "../enums";
import { ManyToMany, ManyToOne, Property } from "@mikro-orm/core";
import { CourseFormated } from "../entities/";
import { SwimmerMarge } from "./SwimmerMarge";

export class StatByAge {

    @Property()
    age?: number;

    @Property()
    moyennePerf?: number;

    @ManyToOne()
    maxPerf?: CourseFormated;

    @ManyToOne()
    minPerf?: CourseFormated;

    @Property()
    variancePerf?: number;

    @Property()
    moyenneMarges?: number;

    @Property()
    maxMarges?: SwimmerMarge;

    @Property()
    minMarges?: SwimmerMarge;

    @Property()
    varianceMarges?: number;
}