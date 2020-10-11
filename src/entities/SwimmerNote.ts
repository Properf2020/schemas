import { Entity, Property } from "mikro-orm";
import { Note } from ".";

@Entity()
export class SwimmerNote {

    @Property()
    perfomance?: Note;

    @Property()
    amelioration?: Note;
}