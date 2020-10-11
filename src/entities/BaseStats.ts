import { ObjectId } from "@mikro-orm/mongodb";
import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from "mikro-orm";
import { BaseEntity, Note } from ".";

export abstract class BaseStats extends BaseEntity {

    @PrimaryKey()
    _id!: ObjectId;

    @SerializedPrimaryKey()
    id!: string;

    @Property()
    performance;

    constructor(performance: Note) {
        super();
        this.performance = performance;
    }

}