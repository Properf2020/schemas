import { ObjectId } from "@mikro-orm/mongodb";
import { PrimaryKey, SerializedPrimaryKey } from "mikro-orm";

const { Entity } = require("mikro-orm");

@Entity()
export class SwimmerRecord {
    @PrimaryKey()
    _id!: ObjectId;

    @SerializedPrimaryKey()
    id!: string;
}