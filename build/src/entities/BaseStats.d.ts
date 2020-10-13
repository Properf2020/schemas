import { BaseEntity } from ".";
import { Note } from "../objects";
export declare abstract class BaseStats extends BaseEntity {
    performance: Note;
    constructor(performance: Note);
}
