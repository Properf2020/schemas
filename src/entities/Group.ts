import { ObjectId } from "@mikro-orm/mongodb";
import { Collection, Entity, OneToMany, PrimaryKey, Property, SerializedPrimaryKey } from "mikro-orm";
import { BaseEntity, Swimmer, User } from ".";
import { GroupRepository } from "../repositories/GroupRepository";


@Entity({ customRepository: () => GroupRepository })
export class Group extends BaseEntity {

    @PrimaryKey()
    _id!: ObjectId;

    @SerializedPrimaryKey()
    id!: string;

    @OneToMany(() => Swimmer, swimmer => swimmer.group)
    swimmers = new Collection<Swimmer>(this);

    @Property({ type: User })
    coach: User;

    constructor(coach: User) {
        super();
        this.coach = coach;
    }

}