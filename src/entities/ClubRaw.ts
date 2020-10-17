import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from ".";

@Entity()
export class ClubRaw extends BaseEntity {

    @Property()
    dep?: string;

    @Property()
    reg?: string;

    @Property()
    clubID?: string;

    @Property()
    clubName?: string;

    @Property()
    swimmersID?: String[];
}