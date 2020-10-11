import { Collection, Entity, OneToMany, Property } from '@mikro-orm/core';
import { Enum, ManyToMany } from 'mikro-orm';
import { BaseEntity, ClubRole, Swimmer, Bill } from '.';
import { EPlan } from '../enums';
import { ClubRepository } from '../repositories/ClubRepository';

@Entity({ customRepository: () => ClubRepository})
export class Club extends BaseEntity {

  @Property()
  name: string;
  
  @ManyToMany(() => ClubRole)
  users = new Collection<ClubRole>(this);

  @ManyToMany(() => Swimmer)
  swimmers = new Collection<Swimmer>(this);

  @Enum()
  plan?: EPlan;

  @OneToMany(() => Bill, bill => bill.club)
  bills = new Collection<Bill>(this);

  constructor(name: string) {
    super();
    this.name = name;
  }
}
