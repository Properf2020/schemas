import { Collection, Entity, OneToMany, PrimaryKey, Property, SerializedPrimaryKey } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { Enum, ManyToMany } from 'mikro-orm';
import { BaseEntity, ClubRole, Swimmer, Bill } from '.';
import { EPlan } from '../enums';
import { ClubRepository } from '../repositories/ClubRepository';

@Entity({ customRepository: () => ClubRepository })
export class Club extends BaseEntity {

  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @Property()
  name: string;

  @Property()
  idFfn: number;

  @ManyToMany(() => ClubRole)
  users = new Collection<ClubRole>(this);

  @ManyToMany(() => Swimmer)
  swimmers = new Collection<Swimmer>(this);

  @Enum()
  plan?: EPlan;

  // @OneToMany(() => Bill, bill => bill.club)
  // bills = new Collection<Bill>(this);

  constructor(name: string, idFfn: number) {
    super();
    this.name = name;
    this.idFfn = idFfn;
  }
}
