import { BaseEntity, Swimmer } from "../entities";
import { ESeason } from "../enums";
import { ECourseDistance } from "../enums";
import { ECourseType } from "../enums";
export declare class SwimmerMarge extends BaseEntity {
    marge: number;
    swimmer: Swimmer;
    distance: ECourseDistance;
    type: ECourseType;
    season: ESeason;
    constructor(marge: number, swimmer: Swimmer, distance: ECourseDistance, type: ECourseType, season: ESeason);
}
