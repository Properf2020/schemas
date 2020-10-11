import { ObjectId } from "@mikro-orm/mongodb";
export declare class Note {
    _id: ObjectId;
    id: string;
    france?: number;
    departement?: number;
    region?: number;
    club?: number;
}
