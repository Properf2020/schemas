import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { Enum } from 'mikro-orm';
import { BaseEntity, Club } from '.';
import { EPaymentStatus } from '../enums';
import { BillRepository } from '../repositories/BillRepository';

@Entity({ customRepository: () => BillRepository })
export class Bill extends BaseEntity {

  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @Property({ type: Club })
  club: Club;

  @Property()
  from: Date;

  @Property()
  to: Date;

  @Property()
  price: number;

  @Enum()
  paymentStatus: EPaymentStatus;

  constructor(from: Date, to: Date, price: number, club: Club, paymentStatus: EPaymentStatus) {
    super();
    this.from = from;
    this.to = to;
    this.price = price;
    this.club = club;
    this.paymentStatus = paymentStatus;
  }
}
