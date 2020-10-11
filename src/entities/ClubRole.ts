import { Collection, Entity, Property } from "mikro-orm";
import { constructor } from "typescript";
import { User } from ".";
import { ERole } from "../enums";
import { user } from "../mikro-orm.config";

@Entity()
export class ClubRole {

    @Property()
    user: User;

    @Property()
    roles: Array<ERole> = [ERole.DEFAULT]

    constructor(user: User){
        this.user = user;
    }
}