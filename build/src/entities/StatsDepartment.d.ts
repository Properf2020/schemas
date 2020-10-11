import { ObjectId } from "@mikro-orm/mongodb";
import { BaseStats, Note } from ".";
export declare class StatsDepartment extends BaseStats {
    _id: ObjectId;
    id: string;
    performance: Note;
    constructor(performance: Note);
}
