import { Cascade, Collection, Entity, Enum, ManyToMany, OneToMany, Property } from '@mikro-orm/core';
import { BaseEntity, Bill, Swimmer } from '.';
import { EPlan } from '../enums';
import { EDepartment } from '../enums/EDepartment';
import { ERegion } from '../enums/ERegion';
import { ClubRole } from '../objects';
import { ClubRepository } from "../repositories";

@Entity({ customRepository: () => ClubRepository })
export class Club extends BaseEntity {

  @Property()
  name: string;

  @Enum()
  plan: EPlan = EPlan.BASE;

  @Property({ unique: true })
  idFfn: number;

  @Enum()
  department: EDepartment;

  @Enum()
  region: ERegion;

  @ManyToMany(() => ClubRole)
  users = new Collection<ClubRole>(this);

  @ManyToMany()
  swimmers = new Collection<Swimmer>(this);

  @OneToMany(() => Bill, bill => bill.club, { cascade: [Cascade.ALL] })
  bills: Collection<Bill>;

  constructor(name: string, idFfn: number, department: EDepartment, region: ERegion) {
    super();
    this.name = name;
    this.idFfn = idFfn;
    this.department = department;
    this.bills = new Collection<Bill>(this);
    this.region = region;
  }
}
