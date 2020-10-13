import { Collection, Entity, Enum, ManyToMany, Property } from '@mikro-orm/core';
import { BaseEntity, Swimmer } from '.';
import { ERole } from '../enums';
import { ClubRole, UserPreference } from '../objects';
import { UserRepository } from '../repositories';

@Entity({ customRepository: () => UserRepository })
export class User extends BaseEntity {

  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @Property()
  email: string;

  @Property()
  password: string;

  @Property()
  phoneNumber: string;

  @Property()
  swimmer?: Swimmer;

  @Enum()
  role: ERole = ERole.DEFAULT;

  @Property()
  preference!: UserPreference;

  @ManyToMany()
  clubs = new Collection<ClubRole>(this);

  constructor(firstName: string, lastName: string, email: string, password: string, phoneNumber: string) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
  }
}
