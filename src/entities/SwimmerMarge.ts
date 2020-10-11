import { ObjectId } from "@mikro-orm/mongodb";
import { Entity, PrimaryKey, SerializedPrimaryKey } from "mikro-orm";

@Entity()
export class SwimmerMarge {
    @PrimaryKey()
    _id!: ObjectId;

    @SerializedPrimaryKey()
    id!: string;
}