import { Entity, Property } from "mikro-orm";
import { BaseEntity, Note } from ".";

@Entity()
export abstract class BaseStats extends BaseEntity {

    @Property()
    performance?: Note;

    @Property()
    amelioration?: Note;


}