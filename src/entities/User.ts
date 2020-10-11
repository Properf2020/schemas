import { Collection, Entity, PrimaryKey, Property, SerializedPrimaryKey } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { Enum, ManyToMany } from 'mikro-orm';
import { BaseEntity, ClubRole, Swimmer, UserPreference } from '.';
import { ERole } from '../enums';
import { UserRepository } from '../repositories/UserRepository';

@Entity({ customRepository: () => UserRepository })
export class User extends BaseEntity {

  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

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
  preference = new UserPreference(true, true);

  @ManyToMany(() => ClubRole)
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
