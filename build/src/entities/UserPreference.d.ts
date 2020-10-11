import { ObjectId } from "@mikro-orm/mongodb";
export declare class UserPreference {
    _id: ObjectId;
    id: string;
    receive_sms: boolean;
    receive_email: boolean;
    constructor(receive_sms: boolean, receive_email: boolean);
}
