import { Cascade, Collection, Entity, Enum, ManyToMany, OneToMany, Property } from '@mikro-orm/core';
import { ClubRepository } from "../repositories";
import { BaseEntity, Bill, Swimmer } from '.';
import { EPlan } from '../enums';
import { ClubRole } from '../objects';
import { User } from './User';

@Entity({ customRepository: () => ClubRepository })
export class Club extends BaseEntity {

  @Property()
  name: string;

  @Enum()
  plan: EPlan = EPlan.BASE;

  @Property({ unique: true })
  idFfn: number;

  @ManyToMany(() => ClubRole)
  users = new Collection<ClubRole>(this);

  @ManyToMany()
  swimmers = new Collection<Swimmer>(this);

  @OneToMany(() => Bill, bill => bill.club, { cascade: [Cascade.ALL] })
  bills: Collection<Bill>;

  constructor(name: string, idFfn: number) {
    super();
    this.name = name;
    this.idFfn = idFfn;
    this.bills = new Collection<Bill>(this);
  }
}
