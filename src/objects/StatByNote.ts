import { EBassin, ECourseDistance, ECourseType, ESwimmerCategory } from "../enums";
import { Property } from "@mikro-orm/core";

export class StatByNote {

    @Property()
    note?: number;

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