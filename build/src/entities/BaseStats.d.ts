import { ObjectId } from "@mikro-orm/mongodb";
import { BaseEntity, Note } from ".";
export declare abstract class BaseStats extends BaseEntity {
    _id: ObjectId;
    id: string;
    performance: Note;
    constructor(performance: Note);
}
