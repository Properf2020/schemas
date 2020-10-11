import { Collection, Entity, OneToMany, Property } from "mikro-orm";
import { BaseEntity, Swimmer, User } from ".";
import { GroupRepository } from "../repositories/GroupRepository";


@Entity({ customRepository: () => GroupRepository})
export class Group extends BaseEntity {

    @OneToMany(() => Swimmer, swimmer => swimmer.group)
    swimmers = new Collection<Swimmer>(this);

    @Property()
    coach: User;

    constructor(coach: User) {
        super();
        this.coach = coach;
    }

}