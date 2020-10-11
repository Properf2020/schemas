import { ObjectId } from "@mikro-orm/mongodb";
import { Collection, Entity, PrimaryKey, Property, SerializedPrimaryKey } from "mikro-orm";
import { constructor } from "typescript";
import { User } from ".";
import { ERole } from "../enums";
import { user } from "../mikro-orm.config";

@Entity()
export class ClubRole {

    @PrimaryKey()
    _id!: ObjectId;

    @SerializedPrimaryKey()
    id!: string;

    @Property({ type: User })
    user: User;

    @Property()
    roles: Array<ERole> = [ERole.DEFAULT]

    constructor(user: User) {
        this.user = user;
    }
}