import { CourseFormated } from "../entities/";
import { SwimmerMarge } from "./SwimmerMarge";
export declare class StatByAge {
    age?: number;
    moyennePerf?: number;
    maxPerf?: CourseFormated;
    minPerf?: CourseFormated;
    variancePerf?: number;
    moyenneMarges?: number;
    maxMarges?: SwimmerMarge;
    minMarges?: SwimmerMarge;
    varianceMarges?: number;
}
