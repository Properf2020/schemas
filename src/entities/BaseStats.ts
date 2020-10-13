import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from ".";
import { Note } from "../objects";

@Entity()
export abstract class BaseStats extends BaseEntity {

    @Property()
    performance: Note;

    constructor(performance: Note) {
        super();
        this.performance = performance;
    }
}