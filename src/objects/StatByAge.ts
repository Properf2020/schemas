import { EBassin, ECourseDistance, ECourseType } from "../enums";
import { Property } from "@mikro-orm/core";

export class StatByAge {

    @Property()
    age?: number;

    @Property()
    moyennePerf?: number;

    @Property()
    maxPerf?: number;

    @Property()
    minPerf?: number;

    @Property()
    variancePerf?: number;

    @Property()
    moyenneMarges?: number;

    @Property()
    maxMarges?: number;

    @Property()
    minMarges?: number;

    @Property()
    varianceMarges?: number;

}