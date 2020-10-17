import { Entity, ManyToMany, ManyToOne, OneToMany, Property } from "@mikro-orm/core";
import { BaseEntity, BaseStats } from ".";
import { CourseInfo, StatByAge, StatByNote, StatsByCategory } from "../objects";
import { StatsClubRepository } from "../repositories";
import { Club } from "./Club";

@Entity({ customRepository: () => StatsClubRepository })
export class StatsClub extends BaseStats {

    @ManyToOne()
    club: Club;

    constructor(club: Club, course: CourseInfo) {
        super(course);
        this.club = club;
    }
}