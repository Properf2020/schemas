import { BaseEntity, Swimmer } from "../entities";
import { EBassin, ESeason } from "../enums";
import { ECourseDistance } from "../enums";
import { ECourseType } from "../enums";
export declare class SwimmerMarge extends BaseEntity {
    marge: number;
    swimmer: Swimmer;
    distance: ECourseDistance;
    type: ECourseType;
    season: ESeason;
    bassin: EBassin;
    constructor(marge: number, swimmer: Swimmer, distance: ECourseDistance, type: ECourseType, season: ESeason, bassin: EBassin);
}
