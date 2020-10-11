import { ObjectId } from '@mikro-orm/mongodb';
export declare abstract class BaseEntity {
    _id: ObjectId;
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
