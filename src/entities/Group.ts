import { Collection, Entity, OneToMany, Property } from "@mikro-orm/core";
import { BaseEntity, Swimmer, User } from ".";
import { GroupRepository } from "../repositories";

@Entity({ customRepository: () => GroupRepository })
export class Group extends BaseEntity {

    @Property({ type: User })
    coach: User;

    @OneToMany(() => Swimmer, swimmer => swimmer.group)
    swimmers = new Collection<Swimmer>(this);

    constructor(coach: User) {
        super();
        this.coach = coach;
    }
}