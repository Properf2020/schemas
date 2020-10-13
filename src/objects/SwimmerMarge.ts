import { Entity, Property } from "@mikro-orm/core";
import { Swimmer } from "../entities";
import { ESeason } from "../enums";
import { ECourseDistance } from "../enums";
import { ECourseType } from "../enums";

export class SwimmerMarge {

    @Property()
    marge: number;

    @Property()
    swimmer: Swimmer;

    @Property()
    distance: ECourseDistance;

    @Property()
    type: ECourseType;

    @Property()
    season: ESeason;

    constructor(marge: number, swimmer: Swimmer, distance: ECourseDistance, type: ECourseType, season: ESeason) {
        this.distance = distance;
        this.marge = marge;
        this.season = season;
        this.type = type;
        this.swimmer = swimmer;
    }
}