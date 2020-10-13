import { Entity, Property } from "@mikro-orm/core";

export class Note {

    @Property()
    france?: number;

    @Property()
    departement?: number;

    @Property()
    region?: number;

    @Property()
    club?: number;
}