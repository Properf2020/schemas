import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity, User } from ".";
import { ERole } from "../enums";

@Entity()
export class ClubRole extends BaseEntity {

    @Property()
    user: User;

    @Property()
    roles: Array<ERole> = [];

    constructor(user: User) {
        super();
        this.user = user;
    }
}