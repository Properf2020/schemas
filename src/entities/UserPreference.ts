import { Entity, Property } from "mikro-orm";

@Entity()
export class UserPreference {

    @Property()
    receive_sms: boolean;

    @Property()
    receive_email: boolean;

    constructor(receive_sms: boolean, receive_email: boolean) {
        this.receive_email = receive_email;
        this.receive_sms = receive_sms;
    }

}