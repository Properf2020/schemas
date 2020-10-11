import { ObjectId } from "@mikro-orm/mongodb";
import { Note } from ".";
export declare class SwimmerNote {
    _id: ObjectId;
    id: string;
    perfomance?: Note;
    amelioration?: Note;
}
