import { ObjectId } from "@mikro-orm/mongodb";
import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from "mikro-orm";

@Entity()
export class Note {

    @PrimaryKey()
    _id!: ObjectId;

    @SerializedPrimaryKey()
    id!: string;

    @Property()
    france?: number;

    @Property()
    departement?: number;

    @Property()
    region?: number;

    @Property()
    club?: number;
}