import { ObjectId } from '@mikro-orm/mongodb';
import { BaseEntity, Club } from '.';
import { EPaymentStatus } from '../enums';
export declare class Bill extends BaseEntity {
    _id: ObjectId;
    id: string;
    club: Club;
    from: Date;
    to: Date;
    price: number;
    paymentStatus: EPaymentStatus;
    constructor(from: Date, to: Date, price: number, club: Club, paymentStatus: EPaymentStatus);
}
