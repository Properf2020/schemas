import { EDepartment } from "../enums";
import { Entity, Enum, Property } from "@mikro-orm/core";
import { BaseStats } from ".";
import { CourseInfo, Note } from "../objects";
import { StatsDepartmentRepository } from "../repositories";

@Entity({ customRepository: () => StatsDepartmentRepository })
export class StatsDepartment extends BaseStats {

    @Enum()
    departement: EDepartment;

    constructor(departement: EDepartment, course: CourseInfo) {
        super(course);
        this.departement = departement;
    }
}