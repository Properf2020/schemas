import { Entity, Enum, ManyToOne, Property } from "@mikro-orm/core";
import { BaseEntity, Swimmer } from "../entities";
import { EBassin, ESeason } from "../enums";
import { ECourseDistance } from "../enums";
import { ECourseType } from "../enums";

@Entity()
export class SwimmerMarge extends BaseEntity {

    @Property()
    marge: number;

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

    constructor(marge: number, swimmer: Swimmer, distance: ECourseDistance, type: ECourseType, season: ESeason, bassin: EBassin) {
        super();
        this.distance = distance;
        this.marge = marge;
        this.season = season;
        this.type = type;
        this.swimmer = swimmer;
        this.bassin = bassin;
    }
}