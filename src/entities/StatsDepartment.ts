import { Entity, Property } from "@mikro-orm/core";
import { BaseStats } from ".";
import { Note } from "../objects";
import { StatsDepartmentRepository } from "../repositories";

@Entity({ customRepository: () => StatsDepartmentRepository })
export class StatsDepartment extends BaseStats {

    @Property()
    performance: Note;

    constructor(performance: Note) {
        super(performance);
        this.performance = performance;
    }

}