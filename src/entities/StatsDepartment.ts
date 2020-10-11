import { ObjectId } from "@mikro-orm/mongodb";
import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from "mikro-orm";
import { BaseStats, Note } from ".";
import { StatsDepartmentRepository } from "../repositories/StatsDepartmentRepository";

@Entity({ customRepository: () => StatsDepartmentRepository })
export class StatsDepartment extends BaseStats {

    @PrimaryKey()
    _id!: ObjectId;

    @SerializedPrimaryKey()
    id!: string;

    @Property({ type: Note })
    performance: Note;

    constructor(performance: Note) {
        super(performance);
        this.performance = performance;
    }

}