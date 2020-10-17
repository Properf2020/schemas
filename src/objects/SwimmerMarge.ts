import { Entity, ManyToOne, Property } from "@mikro-orm/core";
import { BaseEntity, Swimmer } from "../entities";
import { ESeason } from "../enums";
import { ECourseDistance } from "../enums";
import { ECourseType } from "../enums";

@Entity()
export class SwimmerMarge extends BaseEntity {

    @Property()
    marge: number;

    @ManyToOne()
    swimmer: Swimmer;

    @Property()
    distance: ECourseDistance;

    @Property()
    type: ECourseType;

    @Property()
    season: ESeason;

    constructor(marge: number, swimmer: Swimmer, distance: ECourseDistance, type: ECourseType, season: ESeason) {
        super();
        this.distance = distance;
        this.marge = marge;
        this.season = season;
        this.type = type;
        this.swimmer = swimmer;
    }
}