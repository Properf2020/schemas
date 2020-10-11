import { ObjectId } from "@mikro-orm/mongodb";
import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from "mikro-orm";

@Entity()
export class UserPreference {

    @PrimaryKey()
    _id!: ObjectId;

    @SerializedPrimaryKey()
    id!: string;

    @Property()
    receive_sms: boolean;

    @Property()
    receive_email: boolean;

    constructor(receive_sms: boolean, receive_email: boolean) {
        this.receive_email = receive_email;
        this.receive_sms = receive_sms;
    }
}