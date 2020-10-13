import { Swimmer } from ".";
import { ESeason } from "../enums";
import { ECourseDistance } from "../enums/ECourseDistance";
import { ECourseType } from "../enums/ECourseType";
export interface SwimmerMarge {
    marge: number;
    swimmer: Swimmer;
    distance: ECourseDistance;
    type: ECourseType;
    season: ESeason;
}
