import { ECountry } from "../enums";
import { Entity, Enum, Property } from "@mikro-orm/core";
import { BaseStats } from ".";
import { CourseInfo, Note } from "../objects";
import { StatsCountryRepository } from "../repositories";

@Entity({ customRepository: () => StatsCountryRepository })
export class StatsCountry extends BaseStats {

    @Enum()
    country: ECountry;

    constructor(country: ECountry, course: CourseInfo) {
        super(course);
        this.country = country;
    }
}